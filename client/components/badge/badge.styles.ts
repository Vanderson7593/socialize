import styled from '@emotion/styled'

export const Circle = styled.div`
  height: 20px;
  min-width: 20px;
  padding: 0 6px 0 6px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.BLUE};
  font-size: ${({ theme }) => theme.fontSizes.Small};
  color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`
