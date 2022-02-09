import { ReactChild, ReactChildren } from 'react';
export interface ContainerProps {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children?: ReactChild | ReactChildren | JSX.Element[] | JSX.Element;
}
