import styled from '@emotion/styled'
import { boxShadow, color, compose, position, space, textAlign } from 'styled-system'

import { InputProps } from './input.types'

const Input = styled('input')<InputProps>(
  {
    borderRadius: '1rem',
    border: 0,
    padding: '1rem',
    fontSize: '14pt',
    fontWeight: 'lighter',
  },
  compose(color, textAlign, boxShadow, space, position)
)

export default Input
