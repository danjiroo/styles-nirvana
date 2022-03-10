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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const __1 = require("../");
const styles_1 = require("./styles");
const Card = (_a) => {
    var { className, children, zoomOnHover = false, clickable = false, closeable = false, handleClick, handleClose, closeIconName = 'x-circle' } = _a, rest = __rest(_a, ["className", "children", "zoomOnHover", "clickable", "closeable", "handleClick", "handleClose", "closeIconName"]);
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledCard, Object.assign({}, rest, { className: (0, classnames_1.default)(className), zoomOnHover: zoomOnHover, onClick: () => (clickable ? handleClick === null || handleClick === void 0 ? void 0 : handleClick() : {}) }, { children: [closeable && ((0, jsx_runtime_1.jsx)(__1.Icon, { onClick: handleClose, className: 'close_btn', iconName: closeIconName, clickable: true, hoverable: true })), children] })));
};
exports.default = Card;
