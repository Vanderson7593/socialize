import styled from '@emotion/styled'
import { boxShadow, color, compose, position, space, textAlign } from 'styled-system'

import { InputProps } from './textarea.types'

const TextArea = styled('textarea')<InputProps>(
  {
    border: 0,
    padding: '1rem',
    fontSize: '13pt',
    fontWeight: 'lighter',
    backgroundColor: 'inherit',
    width: '100%',
    resize: 'vertical',
    minHeight: '100px',
  },
  compose(color, textAlign, boxShadow, space, position)
)

export default TextArea
