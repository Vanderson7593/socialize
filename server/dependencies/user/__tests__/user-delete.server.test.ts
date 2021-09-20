import { IUser } from '@types'
import { makeRemoveUser } from '../user-delete'

const makeSut = (users: IUser[], user: IUser) => makeRemoveUser(users, user)

const mockUser = {
  id: 'any_id',
  name: 'any_name',
} as IUser

describe('User remove dependency', () => {
  it('should return same users if it does not exist', () => {
    const sut = makeSut([] as IUser[], mockUser)
    expect(sut).toHaveLength(0)
    expect(sut).toEqual([])
  })

  it('should remove user if it already exists', () => {
    const sut = makeSut([mockUser] as IUser[], mockUser)
    expect(sut).toHaveLength(0)
    expect(sut).toEqual([])
  })
})
