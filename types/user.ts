import { EState, EUser } from '@constants'
import { IMessage } from './message'
import { IModel } from './model'

export interface IUser extends IModel {
  [EUser.Name]: string
  [EUser.SocketId]: string
  [EUser.Messages]: IMessage[]
}
