import { IUser } from '@types'
import { TMakeUserDependency } from './types'

export const makeRemoveUser: TMakeUserDependency = (users, user) =>
  users.filter(_user => _user.id !== user.id)
