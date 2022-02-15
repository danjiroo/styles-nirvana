import React from 'react';
interface UseDynamicSVGImportOptions {
    onCompleted?: (iconName: string, SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined) => void;
    onError?: (err: Error) => void;
}
export declare function useDynamicSVGImport(iconName: string, options?: UseDynamicSVGImportOptions): {
    error: Error | undefined;
    loading: boolean;
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined;
};
export {};
