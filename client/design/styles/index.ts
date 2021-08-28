import { css } from '@emotion/react'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 50%;
  }

  body {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom-style: none;
  }

  button {
    border: none;
    background-color: inherit;
  }

  body,
  button,
  input {
    font-family: 'Sora', 'Open Sans', sans-serif;
  }
  input:focus,
  textarea:focus,
  button:focus,
  select:focus {
    outline: none;
  }
`
