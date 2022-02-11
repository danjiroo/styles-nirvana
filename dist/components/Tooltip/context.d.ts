import React from 'react';
declare type ContextProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    top: number;
    setTop: (value: number) => void;
    left: number;
    setLeft: (value: number) => void;
    content: string;
    setContent: (value: string) => void;
};
declare type TooltipProviderProps = {
    children: any;
};
export declare const TooltipContext: React.Context<ContextProps>;
export declare function ToolTipProvider({ children }: TooltipProviderProps): JSX.Element;
export {};
