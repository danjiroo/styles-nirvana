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
  fontWeight: number
  padding: string
}

type ContainerSizes = Exclude<Sizes, 'md'>
type TSize = {
  [P in ContainerSizes]: string | number
}

interface NewSizes extends TSize {
  md: string | number
}

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
export type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

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
  } & {
    light: Pick<ColorDefinition, 'DEFAULT' | 'light' | 'dark'>
    dark: Pick<ColorDefinition, 'DEFAULT' | 'light' | 'dark'>
  }
  headers: {
    [P in Headers]?: HeaderDefinition
  }
  icon: {
    [P in Sizes]: Pick<ButtonDefinition, 'fontSize'>
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
    fontUrl: string
    fontFamily: string
    fontSize: number
    fontWeight: number
    lineHeight: number
  }
  size: NewSizes
  // size: {
  //   xs: string
  //   sm: string
  //   md: string
  //   lg: string
  //   xl: string
  // }
}

export interface ThemeProvider {
  theme: ThemeDefinition
}

export enum ThemesList {
  BASE = 'base',
  DARK_MODE = 'darkMode',
}
