import { IUser } from '@types'

export type TMakeUserDependency = (users: IUser[], user: IUser) => IUser[]
