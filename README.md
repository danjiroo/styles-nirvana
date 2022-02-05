# Storybook

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

```
// Parent Component or Top Level Component
import { ThemeProvider } from 'styled-components'
import { Themes } from '@pando-styles/nirvana'

const App: React.FC = () => (

    /*
     * Add logic here to toggle between themes
     * Note: Themes still have temporary values
     */

    <ThemeProvider theme={Themes.base|darkMode}>
      <div></div>
    </ThemeProvider>
)
```

Importing **Atomic Components** from Pando Nirvana

```
// Sample Component
import { Button } from '@pando-styles/nirvana'

const SampleComponent: React.FC = () => (
    <div>
      <Button label='Submit'>
    </div>
)
```

> This documentation is still in progress.
