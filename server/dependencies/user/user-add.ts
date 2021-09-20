import { IUser } from '@types'

export const makeAddUser = (users: IUser[], user: IUser) => {
  const isUserAdded = users.filter(_user => _user.id === user.id)

  if (isUserAdded.length === 0 && user) return users.concat([user])

  return users
}
