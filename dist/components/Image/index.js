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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const __1 = require("../");
const styles_1 = require("./styles");
const Image = (props) => {
    const { alt = 'image placeholder', className, isLoading = false, objectFit = 'contain', placeholder = '', rounded = false, src } = props, rest = __rest(props, ["alt", "className", "isLoading", "objectFit", "placeholder", "rounded", "src"]);
    const [loaded, setLoaded] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(false);
    const imageSrc = src || placeholder;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledImageContainer, Object.assign({ rounded: rounded, className: (0, classnames_1.default)('image', className) }, { children: [(0, jsx_runtime_1.jsx)(styles_1.StyledImage, Object.assign({ src: imageSrc, alt: alt, onLoad: () => setLoaded(true), onError: () => {
                    setError(true);
                    setLoaded(false);
                } }, rest)), isLoading && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'spinner' }, { children: (0, jsx_runtime_1.jsx)(__1.RaySpinner, {}) })))] })));
};
exports.default = Image;
