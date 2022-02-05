import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { Themes } from '../src/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    const [theme, setTheme] = useState('base')

    const handleToggleTheme = () => {
      if (theme === 'base') {
        setTheme('darkMode')
      } else {
        setTheme('base')
      }
    }

    return (
      <ThemeProvider theme={Themes[theme] ?? {}}>
        {/* <StyledDiv> */}
        {/* <button onClick={handleToggleTheme}>TOGGLE THEME</button> */}
        <Story />
        {/* </StyledDiv> */}
      </ThemeProvider>
    )
  },
]

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.bgColors.container};
`
