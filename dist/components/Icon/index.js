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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const react_1 = require("react");
const styles_1 = require("./styles");
const useDynamicSVGImport_1 = require("./useDynamicSVGImport");
const Icon = (props) => {
    const { className, color = 'primary', iconName = 'activity', size = 'base', stroke = 'black' } = props, other = __rest(props, ["className", "color", "iconName", "size", "stroke"]);
    const onCompleted = (0, react_1.useCallback)(() => {
        // alert('COMPLETEDDDDD -----')
    }, []);
    const onError = (0, react_1.useCallback)(() => {
        // alert('ERRORRRRR -----')
    }, []);
    const { error, loading, SvgIcon } = (0, useDynamicSVGImport_1.useDynamicSVGImport)(iconName, {
        onCompleted,
        onError,
    });
    const getIcon = () => {
        if (error) {
            return 'Error loading icon...';
        }
        if (loading) {
            return 'Loading...';
        }
        if (SvgIcon) {
            return (0, jsx_runtime_1.jsx)(SvgIcon, { stroke: stroke }, void 0);
        }
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "Icons" }, void 0);
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledIconDiv, Object.assign({ size: size, color: color }, { children: getIcon() }), void 0));
};
exports.default = Icon;
//# sourceMappingURL=index.js.map