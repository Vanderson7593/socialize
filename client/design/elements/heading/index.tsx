import styled from '@emotion/styled'
import {
  color,
  compose,
  position,
  space,
  textAlign,
  textShadow,
  typography,
  variant,
} from 'styled-system'
import HeadingStyles from './heading.styles'
import { HeadingProps } from './heading.types'

const Heading = styled('h1')<HeadingProps>(
  compose(
    color,
    textAlign,
    textShadow,
    typography,
    space,
    position,
    variant({
      prop: 'as',
      variants: {
        h1: HeadingStyles.h1,
        h2: HeadingStyles.h2,
        h3: HeadingStyles.h3,
        h4: HeadingStyles.h4,
      },
    })
  )
)

export default Heading
