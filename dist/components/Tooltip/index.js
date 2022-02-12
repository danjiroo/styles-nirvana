"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const react_1 = __importStar(require("react"));
const useTooltip_1 = __importDefault(require("./useTooltip"));
const styles_1 = require("./styles");
const Tooltip = react_1.default.forwardRef(function Tooltip(props, ref) {
    const { showTooltip, hideTooltip, isTooltipVisible, top, left } = (0, useTooltip_1.default)();
    (0, react_1.useImperativeHandle)(ref, () => ({
        handleClick: (elRef) => {
            var _a;
            if (isTooltipVisible) {
                hideTooltip();
                return;
            }
            const { y, x, width } = elRef.current.getBoundingClientRect();
            const elementId = (_a = elRef === null || elRef === void 0 ? void 0 : elRef.current) === null || _a === void 0 ? void 0 : _a.id;
            // if (window.innerHeight - bottom < tooltipHeight) {
            //   console.log(
            //     '-- bottom -- y - tooltipHeight -->>',
            //     y,
            //     tooltipHeight,
            //     y - tooltipHeight
            //   )
            //   showTooltip(y - tooltipHeight, x + width, `Tooltip on the ${elementId}`)
            //   return
            // }
            showTooltip(y, x + width + 20, `Tooltip on the ${elementId}`);
        },
    }));
    return isTooltipVisible ? ((0, jsx_runtime_1.jsx)(styles_1.StyledTooltipContainer, Object.assign({ top: top, left: left }, { children: props.children }), void 0)) : null;
});
exports.default = Tooltip;
//# sourceMappingURL=index.js.map