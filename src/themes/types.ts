/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  lineHeight: number
}

export interface ColorDefinition {
  50?: string
  100?: string
  200?: string
  DEFAULT: string
  300?: string
  400?: string
}

export interface HeaderDefinition {
  fontSize: number
  fontWeight: number
  padding: string
}

export interface SizeDef {
  height: string
  width: string
}

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
export type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TSize = {
  [P in Sizes]: SizeDef
}
export interface ThemeDefinition {
  badge: {
    [P in Sizes]: ButtonDefinition
  }
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
  icon: {
    [P in Sizes]: {
      height: number
    }
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
    size: {
      [P in Sizes]: number
    }
  }
  table: {
    border?: number
  }
  text: {
    fontUrl: string
    fontFamily: string
    size: {
      [P in Sizes]: {
        fontSize: number
        fontWeight: number
      }
    }
  }
  size: TSize & {
    full: SizeDef
  }
}

export interface ThemeProvider {
  theme: ThemeDefinition
}

export enum ThemesList {
  BASE = 'base',
  DARK_MODE = 'darkMode',
}
