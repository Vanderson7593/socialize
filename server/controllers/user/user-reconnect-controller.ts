import { IUser } from '@types'
import { Socket } from 'socket.io'
import { userModifier } from '../../helpers/user-modifier'
import { makeAddUser } from '../../dependencies/user/user-add'
import { userValidation } from '../../validation/user-validation'
import { makeUpdateSocketIdUser } from '../../dependencies/user/user-update-socket-id'

export interface IUserReconnectController {
  (socket: Socket, user: IUser, users: IUser[]): IUser[]
}

export const userReconnectController: IUserReconnectController = (socket, user, users) => {
  const isValid = userValidation(user)

  if (!isValid) return users

  return makeUpdateSocketIdUser(users, userModifier(user, socket.id))
}
