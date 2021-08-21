/* eslint @typescript-eslint/no-explicit-any: off, import/no-named-default:off */

import { FC } from 'react'
import { default as Image, ImageProps } from 'next/image'
import { ImageWrapper } from './avatar.styles'

const Avatar: FC<ImageProps> = props => (
  <ImageWrapper>
    <Image {...props} />
  </ImageWrapper>
)

export default Avatar
