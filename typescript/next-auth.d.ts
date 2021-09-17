import NextAuth from 'next-auth'

import { EModel, EUser } from '../../constants'
import { IUser } from '../../types'

declare module 'next-auth' {
  export interface Session {
    expires: string
    user: {
      id: string
      username: string
    }
  }
}
