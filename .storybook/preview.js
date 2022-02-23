import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'

import { Themes } from '../src/themes'
import { Modifiers } from '../src/components/GlobalStyles'

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

    return (
      <MemoryRouter>
        <ThemeProvider theme={Themes[theme] ?? {}}>
          <Modifiers />
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    )
  },
]