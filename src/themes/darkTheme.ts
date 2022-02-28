import { baseTheme } from './baseTheme'
import { ThemeDefinition } from './types'

export const darkModeTheme: ThemeDefinition = {
  ...baseTheme,
  bgColors: {
    card: '#454545',
    container: '#333333',
  },
  colors: {
    primary: {
      50: '#EAF5F5',
      100: '#CAE5E6',
      200: '#96CACD',
      DEFAULT: '#2C969B',
      300: '#006267',
      400: '#003136',
    },
    secondary: {
      50: '#E5FCF5',
      100: '#BFF9E7',
      200: '#80F2CE',
      DEFAULT: '#00E59E',
      300: '#00C17A',
      400: '#00752E',
    },
    success: {
      100: '#E7F8F2',
      200: '#C3EEDF',
      DEFAULT: '#87DCC0',
      300: '#10B981',
    },
    warning: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FCD34D',
      DEFAULT: '#F59E0B',
      300: '#B45309',
      400: '#8f4003',
    },
    danger: {
      100: '#FDECEC',
      200: '#FBD0D0',
      DEFAULT: '#F7A1A1',
      300: '#EF4444',
    },
    light: {
      50: '#FFFFFF',
      100: '#FCFCFD',
      200: '#F9FAFB',
      DEFAULT: '#F2F4F7',
      300: '#EAECF0',
      400: '#D0D5DD',
    },
    dark: {
      50: '#98A2B3',
      100: '#667085',
      200: '#475467',
      DEFAULT: '#344054',
      300: '#1D2939',
      400: '#101828',
    },
  },
}
