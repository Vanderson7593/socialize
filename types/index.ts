import 'next-auth'

export * from './user'
export * from './model'

declare module 'next-auth' {
  interface Session {
    expires: string
    user: {
      id: string
      name: string
    }
  }
}
