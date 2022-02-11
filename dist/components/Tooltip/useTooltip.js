"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const react_1 = require("react");
function useTooltip() {
    //   const { show, setShow, top, setTop, left, setLeft, content, setContent } =
    // useContext(TooltipContext)
    const [show, setShow] = (0, react_1.useState)(false);
    const [top, setTop] = (0, react_1.useState)(0);
    const [left, setLeft] = (0, react_1.useState)(0);
    const [content, setContent] = (0, react_1.useState)('');
    //   const showTooltip = useCallback(
    //     (top: number, left: number, content: string) => {
    //       setTop(top)
    //       setLeft(left)
    //       setShow(true)
    //       setContent(content)
    //     },
    //     [setTop, setLeft, setShow, setContent]
    //   )
    const showTooltip = (top, left, content) => {
        console.log('@what ahappened to top', top);
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
//# sourceMappingURL=useTooltip.js.map