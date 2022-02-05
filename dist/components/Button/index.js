"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const __1 = require("../");
/**
 * Primary UI component for user interaction
 */
const Button = (_a) => {
    var { label, isLoading = false, loadingLabel = 'Loading...', isDisabled = false, icon, iconLeft, iconRight, layout = 'solid', btnColor = 'primary', size = 'base' } = _a, other = __rest(_a, ["label", "isLoading", "loadingLabel", "isDisabled", "icon", "iconLeft", "iconRight", "layout", "btnColor", "size"]);
    // ! NOTE: Doing this since there's an issue in storybook,
    // ! if props are not set with default values at the parameter level,
    // ! storybook will not show any default value in the addons/docs
    const usedProps = {
        label,
        isLoading,
        loadingLabel,
        isDisabled,
        icon,
        iconLeft,
        iconRight,
        layout,
        btnColor,
        size,
    };
    const IconLeft = iconLeft || icon;
    const IconRight = iconRight;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledButton, Object.assign({ type: 'button' }, other, usedProps, { disabled: isDisabled }, { children: [IconLeft && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div' }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: IconLeft, color: layout === 'solid' ? '#fff' : btnColor, size: size }, void 0) }), void 0)), isLoading && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div' }, { children: (0, jsx_runtime_1.jsx)(__1.RaySpinner, { color: layout === 'solid' ? '#fff' : btnColor, size: size, rayHeight: 3, rayWidth: 2, inButton: true }, void 0) }), void 0)), (0, jsx_runtime_1.jsx)("span", { children: isLoading ? loadingLabel : label }, void 0), IconRight && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div' }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: IconRight, color: layout === 'solid' ? '#fff' : btnColor, size: size }, void 0) }), void 0))] }), void 0));
};
exports.default = Button;
//# sourceMappingURL=index.js.map