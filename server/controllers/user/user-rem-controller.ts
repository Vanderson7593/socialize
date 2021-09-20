import { IUser } from '@types'
import { Socket } from 'socket.io'
import { userModifier } from '../../helpers/user-modifier'
import { makeAddUser } from '../../dependencies/user/user-add'
import { userValidation } from '../../validation/user-validation'
import { makeRemoveUser } from '../../dependencies/user/user-delete'

export interface IUserRemController {
  (user: IUser, users: IUser[]): IUser[]
}

export const userRemController: IUserRemController = (user, users) => makeRemoveUser(users, user)
