/// <reference types="react" />
export declare const StyledNavLink: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react-router-dom").NavLinkProps & import("react").RefAttributes<HTMLAnchorElement>>, any, {}, never>;
interface IChildrenItems {
    [key: string]: any;
}
interface StyledNavWithChildrenProps {
    children_items: IChildrenItems[];
}
export declare const StyledNavWithChildren: import("styled-components").StyledComponent<"menu", any, StyledNavWithChildrenProps, never>;
export declare const StyledNavWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
