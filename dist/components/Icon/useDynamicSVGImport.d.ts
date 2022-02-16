import React from 'react';
import { UseDynamicSVGImportOptions } from './types';
export declare function useDynamicSVGImport(iconName: string, options?: UseDynamicSVGImportOptions): {
    error: Error | undefined;
    loading: boolean;
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
};
