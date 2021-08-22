import { theme } from '@theme'
import { FC, SVGAttributes } from 'react'

const Check: FC<SVGAttributes<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.GREY_LIGHT}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default Check
