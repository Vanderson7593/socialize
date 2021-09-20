import { IUser } from '@types'

export const userValidation = (user: IUser): boolean => {
  if (!user) return false
  return true
}
