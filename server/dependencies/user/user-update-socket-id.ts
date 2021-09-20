import { IUser } from '@types'

export const makeUpdateSocketIdUser = (users: IUser[], user: IUser): IUser[] => {
  const isUserAdded = users.filter(_user => _user.id === user.id)

  if (isUserAdded.length !== 0 && user) {
    const index = users.indexOf(isUserAdded[0])
    users[index].socketId = user.socketId
  }

  return users
}
