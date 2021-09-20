import { IUser } from '@types'
import { userModifier } from '../user-modifier'

const mockUser = {
  id: 'any_id',
  name: 'any_name',
} as IUser

const SOCKET_ID = 'any_socket_id'

const makeSut = () => userModifier(mockUser, SOCKET_ID)

describe('User dependency', () => {
  it('should add user if it does not exist', () => {
    const sut = makeSut()
    expect(sut).toEqual({ ...mockUser, socketId: SOCKET_ID })
  })
})
