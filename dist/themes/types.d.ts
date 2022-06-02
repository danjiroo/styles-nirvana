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
    lineHeight: number;
}
export interface ColorDefinition {
    50?: string;
    100?: string;
    200?: string;
    DEFAULT: string;
    300?: string;
    400?: string;
}
export interface HeaderDefinition {
    fontSize: string;
    fontWeight: number;
    padding: string;
}
export interface SizeDef {
    width: string;
    height: string;
    containerHeight: string;
    iconHeight: string;
    loader: number;
    loaderInButton: number;
    progressScale: number;
}
export declare type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type ColorTypes = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
export declare type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare type TSize = {
    [P in Sizes]: SizeDef;
};
export interface ThemeDefinition {
    bgColors: BackgroundColor;
    border: Border;
    colors: {
        [P in ColorTypes]: ColorDefinition;
    };
    headers: {
        [P in Headers]?: HeaderDefinition;
    };
    list: {
        padding: number;
        listStyle: string;
        size: {
            [P in Sizes]: string;
        };
    };
    text: {
        fontUrl: string;
        fontFamily: string;
        size: {
            [P in Sizes]: {
                fontSize: string;
                fontWeight: number;
            };
        };
    };
    size: TSize & {
        full: Pick<SizeDef, 'width' | 'height' | 'containerHeight'>;
    };
}
export interface ThemeProvider {
    theme: ThemeDefinition;
}
export declare enum ThemesList {
    BASE = "base",
    DARK_MODE = "darkMode"
}
export {};
