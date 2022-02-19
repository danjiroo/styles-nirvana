"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkModeTheme = void 0;
const baseTheme_1 = require("./baseTheme");
exports.darkModeTheme = Object.assign(Object.assign({}, baseTheme_1.baseTheme), { bgColors: {
        card: '#454545',
        container: '#333333',
    }, colors: {
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
            light: '#ffffff',
            DEFAULT: '#eeeeee',
            dark: '#dddddd',
        },
        dark: {
            light: '#222222',
            DEFAULT: '#111111',
            dark: '#000000',
        },
    } });
