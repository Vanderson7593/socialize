import { EMessage } from '@constants'
import { IUser } from './user'

export interface IMessage {
  [EMessage.CONTENT]: string
  [EMessage.FROM]: IUser
  [EMessage.IS_READED]: boolean
  [EMessage.TIME]: Date
}
