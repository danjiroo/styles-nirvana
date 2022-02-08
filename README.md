# <h1 style="color: #1abc9c; font-weight: bold; letter-spacing: 5px; text-transform: lowercase;">Pando Nirvana</h1>

We created a storybook to showcase components about how they look and work in our future projects. Also, these components are atomic components that are reusable across different projects that we will be creating soon.

## How to start storybook

```
yarn storybook
```

## Import Pando Nirvana to an existing project

```
yarn add @pando-styles/nirvana
```

or

```
npm install @pando-styles/nirvana
```

Import **ThemeProvider** from styled-components to your top level component.

```javascript
// Parent Component or Top Level Component
import { ThemeProvider } from 'styled-components'
import { Themes } from '@pando-styles/nirvana'

const App: React.FC = () => (
  /*
   * Add logic here to toggle between themes
   * Note: Themes still have temporary values
   */

  <ThemeProvider theme={Themes.base | darkMode}>
    <div></div>
  </ThemeProvider>
)
```

Importing **Atomic Components** from Pando Nirvana

```javascript
// Sample Component
import { Button } from '@pando-styles/nirvana'

const SampleComponent: React.FC = () => (
    <div>
      <Button label='Submit'>
    </div>
)
```

Accessing the global **theme** from styled-components inside a react component

```javascript
// Sample Component
import { useTheme } from 'styled-components'
import { ThemeDefinition } from '@pando-styles/nirvana'

const SampleComponent: React.FC = () => {
  // or destruct what you only need
  const theme = useTheme() as ThemeDefinition

  return (
    // inline style is only a sample, will not use in development
    <div style={{ background: theme.bgColors.container}}>
      <Button label='Submit'>
    </div>
  )
}
```

Accessing the global **theme** inside a styled component

```typescript
// Sample Component
import { SampleComponentProps } from './types'
import { ThemeProvider } from '@pando-styles/nirvana'

type SampleComponentTypeDef = ThemeProvider & SampleComponentProps

export const StyledSampleComponent = styled.p<SampleComponentTypeDef>`
  color: ${({ theme }) => theme.colors.primary.DEFAULT};
`
```

> This documentation is still in progress.
