import { Divider, Input } from '@components'
import { Flex, View } from '@elements'
import { useTheme } from '@emotion/react'
import { Send } from '@svgs'
import { FC } from 'react'

const Footer: FC = () => {
  const { colors } = useTheme()
  return (
    <Flex flexDirection="column" my={14}>
      <View>
        <Divider />
      </View>
      <Flex alignItems="center">
        <Flex flexGrow={1}>
          <Input placeholder="Escreva alguma coisa!" bgColor={colors.FOREGROUND} />
        </Flex>
        <Flex>
          <Send />
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Footer
