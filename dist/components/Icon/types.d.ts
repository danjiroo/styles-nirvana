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
    /**
     * Name of icon from the icon reference
     */
    iconName?: string;
    /**
     * Icon color type
     */
    color?: keyof typeof IconColorEnum;
    /**
     * Size of icon
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Is icon hoverable
     */
    hoverable?: boolean;
}
export interface UseDynamicSVGImportOptions {
    onCompleted?: (iconName: string, SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined) => void;
    onError?: (err: Error) => void;
}
export {};
