import { Flex } from '@elements'
import styled from '@emotion/styled'

export const TextWrapper = styled(Flex)<{ isReceived: boolean }>`
  padding: 15px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.WHITE};
`
