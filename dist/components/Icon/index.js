"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const react_1 = require("react");
const styles_1 = require("./styles");
const useDynamicSVGImport_1 = require("./useDynamicSVGImport");
const Icon = (props) => {
    const { color = 'primary', iconName = 'activity', size = 'md', stroke = '#98A2B3', } = props;
    const onCompleted = (0, react_1.useCallback)((data) => { }, []);
    const onError = (0, react_1.useCallback)(() => { }, []);
    const { error, loading, SvgIcon } = (0, useDynamicSVGImport_1.useDynamicSVGImport)(iconName, {
        onCompleted,
        onError,
    });
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledIconDiv, Object.assign({ size: size, color: color }, { children: [loading && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0), error && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0), SvgIcon && (0, jsx_runtime_1.jsx)(SvgIcon, { stroke: stroke }, void 0)] }), void 0));
};
exports.default = Icon;
//# sourceMappingURL=index.js.map