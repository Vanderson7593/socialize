// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom'

// import { mockUserSession } from '@client/test-suite'
import { getSession, useSession } from 'next-auth/client'

// eslint-disable-next-line import/no-extraneous-dependencies
// require('dotenv').config({ path: './.env.test' })

// prevent Next Auth console.error
// jest.mock('next-auth/client')
// jest.spyOn(require('next-auth/client'), 'getSession')

//   // Mock getSession, so there is always
//   // an admin role when fetching the API

//   ; (getSession as jest.Mock).mockReturnValue({
//     user: mockUserSession,
//   })
//   ; (useSession as jest.Mock).mockReturnValue([mockUserSession, false])

// jest.setTimeout(30000)
