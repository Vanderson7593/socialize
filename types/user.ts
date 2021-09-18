import { EState, EUser } from '@constants'
import { IModel } from './model'

export interface IUser extends IModel {
  [EUser.SocketId]: string
  [EUser.Name]: string
  [EUser.State]: EState
}
