import { IUser } from '@types'
import { EModel, EUser } from '../../constants'

export const userModifier = (user: IUser, socketId: string): IUser => ({
  [EModel.ID]: user.id,
  [EUser.Name]: user.name,
  [EUser.SocketId]: socketId,
  [EUser.Messages]: [],
})
