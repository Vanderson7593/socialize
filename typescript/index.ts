import { Session } from 'next-auth'

import { EModel, EUser } from '../constants'

export type WithAdditionalParams<T extends Record<string, any>> = T & Record<string, unknown>

export type UserSession = Session & {
  user: {
    [EModel.ID]: string
    [EUser.Username]: string
  }
}

export type UseSessionReturn = [UserSession | null | undefined, boolean]
