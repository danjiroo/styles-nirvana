import React from 'react';
declare enum IconColorEnum {
    primary = 0,
    secondary = 1,
    success = 2,
    warning = 3,
    danger = 4,
    light = 5,
    dark = 6
}
export interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
    iconName?: string;
    color?: keyof typeof IconColorEnum;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}
export {};
