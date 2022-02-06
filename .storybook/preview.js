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
        <StyledDiv>
          {/* <button onClick={handleToggleTheme}>TOGGLE THEME</button> */}
          <Story />
        </StyledDiv>
      </ThemeProvider>
    )
  },
]

// ! App.tsx or Top Level Component in your project
// ! This is only the Preview Area
const StyledDiv = styled.div`
  /* background: ${({ theme }) => theme.bgColors.container}; */

  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  font-family: 'Poppins', sans-serif;
`
