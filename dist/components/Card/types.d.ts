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
     * An action prop that is executed when clicking the card
     */
    handleClick?: () => void;
}
