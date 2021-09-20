import 'next-auth'

export * from './user'
export * from './model'
export * from './message'

declare module 'next-auth' {
  interface Session {
    expires: string
    user: {
      id: string
      name: string
    }
  }
}
