"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseTheme = void 0;
exports.baseTheme = {
    bgColors: {
        card: '#f2f2f2',
        container: '#ffffff',
    },
    border: {
        width: 0,
        radius: '0.375rem',
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
            DEFAULT: '#10B981',
            300: '#87DCC0',
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
            DEFAULT: '#EF4444',
            300: '#F7A1A1',
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
    headers: {
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            padding: '5px 10px',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            padding: '5px 10px',
        },
        h3: {
            fontSize: '1.1rem',
            fontWeight: 700,
            padding: '5px 10px',
        },
        h4: {
            fontSize: '0.875rem',
            fontWeight: 500,
            padding: '5px 10px',
        },
        h5: {
            fontSize: '0.75rem',
            fontWeight: 500,
            padding: '5px 10px',
        },
        h6: {
            fontSize: '0.7rem',
            fontWeight: 500,
            padding: '5px 10px',
        },
    },
    list: {
        padding: 0,
        listStyle: 'none',
        size: {
            xs: '3.125rem',
            sm: '6.25rem',
            md: '9.375rem',
            lg: '12.5rem',
            xl: '15.625rem',
        },
    },
    text: {
        fontUrl: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        fontFamily: 'Poppins, sans-serif',
        size: {
            xs: {
                fontSize: '0.625rem',
                fontWeight: 400,
            },
            sm: {
                fontSize: '0.75rem',
                fontWeight: 400,
            },
            md: {
                fontSize: '0.875rem',
                fontWeight: 400,
            },
            lg: {
                fontSize: '1.063rem',
                fontWeight: 400,
            },
            xl: {
                fontSize: '1.188rem',
                fontWeight: 400,
            },
        },
    },
    size: {
        xs: {
            width: '16.67%',
            height: '2.25rem',
            iconHeight: '1.125rem',
            loader: 36,
            loaderInButton: 13,
        },
        sm: {
            width: '33.34%',
            height: '2.375rem',
            iconHeight: '1.313rem',
            loader: 38,
            loaderInButton: 14,
        },
        md: {
            width: '50%',
            height: '2.5rem',
            iconHeight: '1.563rem',
            loader: 40,
            loaderInButton: 15,
        },
        lg: {
            width: '66.67%',
            height: '2.625rem',
            iconHeight: '1.688rem',
            loader: 42,
            loaderInButton: 16,
        },
        xl: {
            width: '83.34%',
            height: '2.75rem',
            iconHeight: '1.875rem',
            loader: 44,
            loaderInButton: 17,
        },
        full: {
            height: '100%',
            width: '100%',
        },
    },
};
