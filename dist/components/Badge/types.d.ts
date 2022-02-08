import React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Badge text
     */
    label?: string;
    /**
     * Is badge closable? A close icon will be shown once badge is hovered.
     */
    closable?: boolean;
    /**
     * Size of the badge
     */
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    /**
     * Color of the badge
     */
    type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    /**
     * Custom action when clicking the badge
     */
    onClick?: () => void;
}
