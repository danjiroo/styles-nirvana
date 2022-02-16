export interface BackgroundColor {
    card: string;
    container: string;
}
export interface Border {
    width: number;
    radius: string;
}
export interface ButtonDefinition {
    fontSize: number;
    fontWeight: number;
    padding: string;
}
export interface ColorDefinition {
    50: string;
    100: string;
    light: string;
    DEFAULT: string;
    dark: string;
}
export interface HeaderDefinition {
    fontSize: number;
    fontWeight: number;
    padding: string;
}
declare type ContainerSizes = Exclude<Sizes, 'md'>;
declare type TSize = {
    [P in ContainerSizes]: string | number;
};
interface NewSizes extends TSize {
    md: string | number;
}
export declare type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type ColorTypes = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export declare type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface ThemeDefinition {
    badge: {
        [P in Sizes]: ButtonDefinition;
    };
    bgColors: BackgroundColor;
    border: Border;
    button: {
        [P in Sizes]: ButtonDefinition;
    };
    colors: {
        [P in ColorTypes]: ColorDefinition;
    } & {
        light: Pick<ColorDefinition, 'DEFAULT' | 'light' | 'dark'>;
        dark: Pick<ColorDefinition, 'DEFAULT' | 'light' | 'dark'>;
    };
    headers: {
        [P in Headers]?: HeaderDefinition;
    };
    icon: {
        [P in Sizes]: {
            height: number;
        };
    };
    input: {
        border: number;
    };
    loader: {
        [P in Sizes]: {
            inButtonSize?: number;
        } & Pick<ButtonDefinition, 'fontSize'>;
    };
    list: {
        padding: number;
        listStyle: string;
    };
    table: {
        border?: number;
    };
    text: {
        fontUrl: string;
        fontFamily: string;
        fontSize: number;
        fontWeight: number;
        lineHeight: number;
    };
    size: NewSizes;
}
export interface ThemeProvider {
    theme: ThemeDefinition;
}
export declare enum ThemesList {
    BASE = "base",
    DARK_MODE = "darkMode"
}
export {};
