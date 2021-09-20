import { IUser } from '@types'
import { userModifier } from '../../../helpers/user-modifier'
import { makeUpdateSocketIdUser } from '../user-update-socket-id'

const makeSut = (users: IUser[], user: IUser) => makeUpdateSocketIdUser(users, user)
const SOCKET_ID = 'any_socket_id'

const mockUserWithSocketId = {
  id: 'any_id',
  name: 'any_name',
  socketId: 'default_socket_id',
} as IUser

describe('User update socketId dependency', () => {
  afterEach(() => jest.clearAllMocks())

  it('should update socket id if it does exist', () => {
    const sut = makeSut(
      [mockUserWithSocketId] as IUser[],
      userModifier(mockUserWithSocketId, SOCKET_ID)
    )
    expect(sut).toHaveLength(1)
    expect(sut[0].socketId).toEqual(SOCKET_ID)
  })

  it('should not update user if it does not exists', () => {
    const sut = makeSut([] as IUser[], userModifier(mockUserWithSocketId, SOCKET_ID))
    expect(sut).toHaveLength(0)
    expect(sut).toEqual([])
  })
})
