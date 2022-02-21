export interface CardProps {
    /**
     * Is card hoverable?
     */
    zoomOnHover?: boolean;
    /**
     * Is card clickable?
     */
    clickable?: boolean;
    /**
     * Is card closeable?
     */
    closeable?: boolean;
    /**
     * Display mode of the card
     */
    mode?: 'default' | 'modal' | 'tooltip';
    /**
     * Height of card
     */
    height?: 'auto' | number;
    /**
     * Card width 100%?
     */
    block?: boolean;
    /**
     * An action prop that is executed when clicking the card
     */
    handleClick?: () => void;
    /**
     * An action prop that is executed when clicking the close button in card
     */
    handleClose?: () => void;
}
