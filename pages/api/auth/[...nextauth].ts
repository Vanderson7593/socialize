import * as bcrypt from 'bcrypt';
import { Promise } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Providers from 'next-auth/providers';

import { User } from '../../../constants';
import { getUserByCredential } from '../../../server/factories/password/helper';
import { IUser } from '../../../types';
import { WithAdditionalParams } from '../../../typescript';

const options = {
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 3600, // 3600 seconds <==> 1 hour
  },
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
    newUser: undefined,
  },
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token[User.Id] = user.id;
        token.role = user.role;
      }
      return Promise.resolve(token);
    },
    session: async (session: Session, user) => {
      session.user[User.Id] = user[User.Id] as string;
      session.user[User.Role] = (user as JWT)[User.Role] as IUser['role'];
      session.user[User.Name] = user[User.Name] as string;
      session.user[User.Email] = user[User.Email] as string;
      return session as WithAdditionalParams<Session>;
    },
    redirect: async (url: string) => Promise.resolve(url),
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: User.Email, type: 'text' },
        password: { label: User.Password, type: 'password' },
      },
      async authorize(credentials: Record<string, string>) {
        try {
          const document = await getUserByCredential({
            email: credentials.email,
          });
          const comparisonResult = await bcrypt.compare(
            credentials.password,
            document.password as string
          );
          return comparisonResult ? document : null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
} as NextAuthOptions;

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
