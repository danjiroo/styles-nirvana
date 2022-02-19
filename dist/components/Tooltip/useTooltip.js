"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useTooltip() {
    const [show, setShow] = (0, react_1.useState)(false);
    const [top, setTop] = (0, react_1.useState)(0);
    const [left, setLeft] = (0, react_1.useState)(0);
    const [content, setContent] = (0, react_1.useState)('');
    const showTooltip = (top, left, content) => {
        setTop(top);
        setLeft(left);
        setShow(true);
        setContent(content);
    };
    const hideTooltip = () => {
        setShow(false);
    };
    return {
        showTooltip,
        hideTooltip,
        isTooltipVisible: show,
        top,
        left,
        content,
    };
}
exports.default = useTooltip;
