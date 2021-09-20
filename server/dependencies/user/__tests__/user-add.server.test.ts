import { IUser } from '@types'
import { userModifier } from '../../../helpers/user-modifier'
import { makeAddUser } from '../user-add'

const makeSut = (users: IUser[], user: IUser) => makeAddUser(users, user)
const SOCKET_ID = 'any_socket_id'

const mockUser = {
  id: 'any_id',
  name: 'any_name',
} as IUser

const mockUserWithUser = {
  id: 'any_id',
  name: 'any_name',
  socketId: SOCKET_ID,
} as IUser

describe('User dependency', () => {
  afterEach(() => jest.clearAllMocks())

  it('should add user if it does not exist', () => {
    const sut = makeSut([] as IUser[], userModifier(mockUser, SOCKET_ID))
    expect(sut).toHaveLength(1)
    expect(sut).toEqual([mockUserWithUser])
  })

  it('should not add user if it already exists', () => {
    const sut = makeSut([mockUserWithUser] as IUser[], userModifier(mockUser, SOCKET_ID))
    expect(sut).toHaveLength(1)
    expect(sut).toEqual([mockUserWithUser])
  })

  it('should not add user if it already exists', () => {
    const sut = makeSut([] as IUser[], null as unknown as IUser)
    expect(sut).toHaveLength(0)
    expect(sut).toEqual([])
  })
})
