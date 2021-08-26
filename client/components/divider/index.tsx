import { View } from '@elements'
import { FC } from 'react'
import { Line } from './divider.styles'

const Divider: FC<{ text?: string }> = ({ text }) => (
  <View my={14}>
    <Line hasText={!!text}>{text}</Line>
  </View>
)

export default Divider
