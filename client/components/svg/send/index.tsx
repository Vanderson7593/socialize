import { Flex } from '@elements'
import { useTheme } from '@emotion/react'
import { theme } from '@theme'
import { FC, SVGAttributes } from 'react'

const Send: FC<SVGAttributes<SVGElement>> = props => {
  const { colors } = useTheme()

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      padding={10}
      bg={colors.BLUE}
      borderRadius="50%"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={theme.colors.WHITE}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-send"
        {...props}
      >
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    </Flex>
  )
}

export default Send
