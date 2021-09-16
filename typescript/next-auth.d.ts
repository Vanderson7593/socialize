import { Session } from 'next-auth'

import { EUser, User } from '../constants'
import { IUser } from '../types'

declare module 'next-auth' {
  interface Session {
    expires: string
    user: {
      [EUser.Id]: string
      [EUser.Username]: string
    }
  }
}
