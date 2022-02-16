import React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Badge text
     */
    label?: string;
    /**
     * Is badge closeable? A close icon will be shown once badge is hovered.
     */
    closeable?: boolean;
    /**
     * Size of the badge
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Color of the badge
     */
    type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    /**
     * Custom action when clicking the badge
     */
    onClick?: () => void;
}
