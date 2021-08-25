import { Flex } from '@elements'
import styled from '@emotion/styled'

export const MessageWrapper = styled(Flex)`
  align-items: flex-end;
  gap: 5px;
`

export const TextWrapper = styled(Flex)<{ isReceived: boolean; isLastOne: boolean }>`
  padding: 15px;
  color: ${({ theme }) => theme.colors.GREY};
  font-size: ${({ theme }) => theme.fontSizes.Small};
  border-radius: 14px;
  ${({ isReceived, theme, isLastOne }) =>
    isReceived
      ? `
      color: ${theme.colors.GREY};
      background-color: ${theme.colors.FOREGROUND};
      border-top-left-radius: 14px;
      ${isLastOne && 'border-bottom-left-radius: 0px'};        
      border-top-right-radius: 14px;
      border-bottom-right-radius: 14px;
      `
      : `
      background-color: ${theme.colors.BLUE};
      color: ${theme.colors.WHITE};
      border-top-left-radius: 14px;
      border-bottom-left-radius: 14px;        
      border-top-right-radius: 14px;
      ${isLastOne && 'border-bottom-right-radius: 0px'};
      `}
`
