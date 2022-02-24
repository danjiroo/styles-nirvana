import React from 'react';
import { GlobalProps } from '../';
export interface IconProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'color'>, GlobalProps {
    /**
     * Name of icon from the icon reference
     */
    iconName?: string;
    /**
     * Is icon hoverable
     */
    hoverable?: boolean;
}
export interface UseDynamicSVGImportOptions {
    onCompleted?: (iconName: string, SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined) => void;
    onError?: (err: Error) => void;
}
