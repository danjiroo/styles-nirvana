declare function useTooltip(): {
    showTooltip: (top: number, left: number, content: string) => void;
    hideTooltip: () => void;
    isTooltipVisible: boolean;
    top: number;
    left: number;
    content: string;
};
export default useTooltip;
