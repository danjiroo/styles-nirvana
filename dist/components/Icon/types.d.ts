import React from 'react';
declare enum IconColorEnum {
    inherit = 0,
    primary = 1,
    secondary = 2,
    success = 3,
    warning = 4,
    danger = 5
}
declare enum IconSizeEnum {
    xs = 0,
    sm = 1,
    base = 2,
    lg = 3,
    xl = 4
}
export interface IconProps extends React.HTMLAttributes<HTMLLIElement> {
    iconName?: string;
    color?: keyof typeof IconColorEnum | string;
    size?: keyof typeof IconSizeEnum;
}
export {};
