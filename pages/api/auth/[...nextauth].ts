import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions, Session } from 'next-auth'
import Providers from 'next-auth/providers'
import { v4 as uuid } from 'uuid'

import { EModel, EUser } from '../../../constants'
import { WithAdditionalParams } from '../../../typescript'

const options = {
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
    newUser: undefined,
  },
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token[EModel.ID] = user.id
        token[EUser.Name] = user.name
      }
      return Promise.resolve(token)
    },
    session: async (session: Session, user) => {
      session.user[EModel.ID] = user[EModel.ID] as string
      session.user[EUser.Name] = user[EUser.Name] as string
      return session as WithAdditionalParams<Session>
    },
    redirect: async (url: string) => Promise.resolve(url),
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: EUser.Name, type: 'text' },
      },
      async authorize(credentials: Record<string, string>) {
        const user = { id: uuid(), name: credentials.username }
        return Promise.resolve(user)
      },
    }),
  ],
} as NextAuthOptions

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
