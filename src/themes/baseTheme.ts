import { ThemeDefinition } from './types'

export const baseTheme: ThemeDefinition = {
  bgColors: {
    card: '#f2f2f2',
    container: 'red',
  },
  border: {
    width: 0,
    radius: '3em',
  },
  button: {
    xs: {
      fontSize: 13,
      fontWeight: 300,
      padding: '8px 18px',
    },
    sm: {
      fontSize: 14,
      fontWeight: 300,
      padding: '9px 19px',
    },
    base: {
      fontSize: 15,
      fontWeight: 300,
      padding: '10px 20px',
    },
    lg: {
      fontSize: 16,
      fontWeight: 300,
      padding: '10px 20px',
    },
    xl: {
      fontSize: 17,
      fontWeight: 300,
      padding: '10px 20px',
    },
  },
  colors: {
    primary: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      light: '#90CAF9',
      DEFAULT: '#4285F4',
      dark: '#356AC3',
    },
    secondary: {
      50: '#F3F4F6',
      100: '#E5E7Eb',
      light: '#D1D5DB',
      DEFAULT: '#6B7280',
      dark: '#374152',
    },
    success: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      light: '#6EE7B7',
      DEFAULT: '#10B981',
      dark: '#047857',
    },
    warning: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      light: '#FCD34D',
      DEFAULT: '#F59E0B',
      dark: '#B45309',
    },
    danger: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      light: '#FCA5A5',
      DEFAULT: '#DC2626',
      dark: '#B91C1C',
    },
    light: {
      DEFAULT: '#ffffff',
    },
    dark: {
      DEFAULT: '#000000',
    },
  },
  headers: {
    h1: {
      fontSize: 24,
      padding: '5px 10px',
    },
    // todo
  },
  icon: {
    xs: {
      fontSize: 13,
    },
    sm: {
      fontSize: 15,
    },
    base: {
      fontSize: 17,
    },
    lg: {
      fontSize: 19,
    },
    xl: {
      fontSize: 22,
    },
  },
  input: {
    border: 0,
  },
  list: {
    padding: 0,
    listStyle: 'none',
  },
  loader: {
    xs: {
      fontSize: 36,
      inButtonSize: 13,
    },
    sm: {
      fontSize: 38,
      inButtonSize: 14,
    },
    base: {
      fontSize: 40,
      inButtonSize: 15,
    },
    lg: {
      fontSize: 42,
      inButtonSize: 16,
    },
    xl: {
      fontSize: 44,
      inButtonSize: 17,
    },
  },
  table: {},
  text: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 1,
  },
}
