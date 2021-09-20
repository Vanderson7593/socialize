import { IUser } from '@types'
import { Socket } from 'socket.io'
import { userModifier } from '../../helpers/user-modifier'
import { makeAddUser } from '../../dependencies/user/user-add'
import { userValidation } from '../../validation/user-validation'

export interface IUserAddController {
  (socket: Socket, user: IUser, users: IUser[]): IUser[]
}

export const userAddController: IUserAddController = (socket, user, users) => {
  const isValid = userValidation(user)

  if (!isValid) return users

  return makeAddUser(users, userModifier(user, socket.id))
}
