import styled from '@emotion/styled'

export const Line = styled.div<{ hasText: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.Small};
  color: ${({ theme }) => theme.colors.GREY};
  ${({ hasText }) => hasText && 'margin:0 auto; width: 90% !important;'}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:before {
    background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
    ${({ hasText }) => hasText && 'margin-right: 10px;'}
    width: 100%;
    height: 1px;
    content: '';
  }

  &:after {
    background-color: ${({ theme }) => theme.colors.GREY_LIGHT};
    ${({ hasText }) => hasText && 'margin-left: 10px;'}
    width: 100%;
    height: 1px;
    content: '';
  }
`
