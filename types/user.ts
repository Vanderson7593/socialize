import { EState, EUser } from '@constants'
import { IModel } from './model'

export interface IUser extends IModel {
  [EUser.SocketId]: string
  [EUser.Username]: string
  [EUser.State]: EState
}
