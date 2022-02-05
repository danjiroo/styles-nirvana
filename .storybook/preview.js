import React from 'react'
import { ThemeProvider } from 'styled-components'

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
  (Story) => (
    <ThemeProvider theme={Themes.base ?? {}}>
      <Story />
    </ThemeProvider>
  ),
]
