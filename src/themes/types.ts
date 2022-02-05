export interface BackgroundColor {
  card: string
  container: string
}

export interface Border {
  width: number
  radius: string
}

export interface ButtonDefinition {
  fontSize: number
  fontWeight: number
  padding: string
}

export interface ColorDefinition {
  50: string
  100: string
  light: string
  DEFAULT: string
  dark: string
}

export interface HeaderDefinition {
  fontSize: number
  padding: string
}

export type Sizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
export type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface ThemeDefinition {
  bgColors: BackgroundColor
  border: Border
  button: {
    [P in Sizes]: ButtonDefinition
  }
  colors: {
    [P in ColorTypes]: ColorDefinition
  }
  headers: {
    [P in Headers]?: HeaderDefinition
  }
  input: {
    border: number
  }
  loader: {
    [P in Sizes]: {
      inButtonSize?: number
    } & Pick<ButtonDefinition, 'fontSize'>
  }
  list: {
    padding: number
    listStyle: string
  }
  table: {
    border?: number
  }
  text: {
    fontSize: number
    fontWeight: number
    lineHeight: number
  }
}

export interface ThemeProvider {
  theme: ThemeDefinition
}
