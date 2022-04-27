import { ReactChild, ReactChildren } from 'react';
import { GlobalSizes } from '../';
export interface ContainerProps extends GlobalSizes {
    /**
     * Wrap any comment with Container component to change it's width
     * In this example, the Input component is wrap inside the Container component
     * When you give the the following props:
        - xs
        - sm
        - md
        - lg
        - xl
    * The width of the Input will update depending on the size prop you give it.
    * If you don't give it a size prop the width of the component wil be 100%.
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children?: ReactChild | ReactChildren | JSX.Element[] | JSX.Element;
    className?: string;
    direction?: string;
    centerXY?: boolean;
    centerX?: boolean;
    centerY?: boolean;
    bgColor?: string;
    customBg?: string;
    height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
import { ThemeProvider } from '../../themes';
export interface GetContainerStyles extends ThemeProvider, GlobalSizes {
    direction?: string;
    centerXY?: boolean;
    centerX?: boolean;
    centerY?: boolean;
    bgColor?: string;
    customBg?: string;
}
