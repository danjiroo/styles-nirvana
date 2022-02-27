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
        radius: '6px',
    },
    badge: {
        xs: {
            fontSize: 13,
            fontWeight: 300,
            padding: '4px 8px',
            lineHeight: 20,
        },
        sm: {
            fontSize: 14,
            fontWeight: 300,
            padding: '5px 9px',
            lineHeight: 20,
        },
        md: {
            fontSize: 15,
            fontWeight: 300,
            padding: '6px 10px',
            lineHeight: 20,
        },
        lg: {
            fontSize: 16,
            fontWeight: 300,
            padding: '7px 11px',
            lineHeight: 20,
        },
        xl: {
            fontSize: 17,
            fontWeight: 300,
            padding: '8px 12px',
            lineHeight: 20,
        },
    },
    button: {
        xs: {
            fontSize: 12,
            fontWeight: 300,
            padding: '0 12px',
            lineHeight: 36,
        },
        sm: {
            fontSize: 13,
            fontWeight: 300,
            padding: '0 14px',
            lineHeight: 38,
        },
        md: {
            fontSize: 14,
            fontWeight: 300,
            padding: '0 16px',
            lineHeight: 40,
        },
        lg: {
            fontSize: 15,
            fontWeight: 300,
            padding: '0 18px',
            lineHeight: 42,
        },
        xl: {
            fontSize: 15,
            fontWeight: 300,
            padding: '0 20px',
            lineHeight: 44,
        },
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
            fontSize: 2,
            fontWeight: 700,
            padding: '5px 10px',
        },
        h2: {
            fontSize: 1.5,
            fontWeight: 700,
            padding: '5px 10px',
        },
        h3: {
            fontSize: 1,
            fontWeight: 700,
            padding: '5px 10px',
        },
        h4: {
            fontSize: 0.875,
            fontWeight: 500,
            padding: '5px 10px',
        },
        h5: {
            fontSize: 0.75,
            fontWeight: 500,
            padding: '5px 10px',
        },
        h6: {
            fontSize: 0.7,
            fontWeight: 500,
            padding: '5px 10px',
        },
        // todo
    },
    icon: {
        xs: {
            height: 18,
        },
        sm: {
            height: 21,
        },
        md: {
            height: 25,
        },
        lg: {
            height: 27,
        },
        xl: {
            height: 30,
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
        md: {
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
        fontUrl: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        fontFamily: 'Poppins, sans-serif',
        size: {
            xs: {
                fontSize: 10,
                fontWeight: 400,
            },
            sm: {
                fontSize: 12,
                fontWeight: 400,
            },
            md: {
                fontSize: 14,
                fontWeight: 400,
            },
            lg: {
                fontSize: 18,
                fontWeight: 400,
            },
            xl: {
                fontSize: 20,
                fontWeight: 400,
            },
        },
    },
    size: {
        // master gibalik nako ang percentages,
        // ga add kog breakpoint, if ang viewport
        // wa pa kaabot 1200px kay 100% iya width
        // master gene, todo discuss if ok ra
        // xs: '320px',
        // sm: '480px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1200px',
        xs: '16.66666666666667%',
        sm: '33.33333333333333%',
        md: '50%',
        lg: '66.66666666666667%',
        xl: '83.33333333333334%',
    },
};
