import styled from '@emotion/styled'
import { boxShadow, color, compose, position, space, textAlign } from 'styled-system'

import { InputProps } from './input.types'

const Input = styled('input')<InputProps>(
  {
    border: 0,
    padding: '1rem',
    fontSize: '13pt',
    fontWeight: 'lighter',
    backgroundColor: 'inherit',
    width: '100%',
  },
  compose(color, textAlign, boxShadow, space, position)
)

export default Input
