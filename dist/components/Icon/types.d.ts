import React from 'react';
declare enum IconColorEnum {
    inherit = 0,
    primary = 1,
    secondary = 2,
    success = 3,
    warning = 4,
    danger = 5
}
export interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
    iconName?: string;
    color?: keyof typeof IconColorEnum;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}
export {};
