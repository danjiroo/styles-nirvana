import { MouseEvent } from 'react';
export interface ButtonProps {
    /**
     * Button text
     */
    label: string;
    /**
     * Used for bg-color, border-colors etc.
     */
    btnColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
    /**
     * The size of the button
     */
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    /**
     * The surface layout of the button
     */
    layout?: 'solid' | 'outline' | 'dashed' | 'dotted' | 'double';
    /**
     * Button surface or edges
     */
    rounded?: boolean;
    /**
     * Is button currently loading?
     */
    isLoading?: boolean;
    /**
     * Shows a custom text when isLoading is true
     */
    loadingLabel?: string;
    /**
     * Button is not clickable
     */
    isDisabled?: boolean;
    /**
     * Shows the button as a block (full width)
     */
    block?: boolean;
    /**
     * Shows only one icon inside the button; defaults to left
     */
    icon?: string;
    /**
     * Shows an icon inside the button, left aligned
     */
    iconLeft?: string;
    /**
     * Shows an icon inside the button, right aligned
     */
    iconRight?: string;
    /**
     * Optional click handler
     */
    onClick?: (data: MouseEvent<HTMLButtonElement>) => void;
}
