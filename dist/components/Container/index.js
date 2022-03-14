"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const styles_1 = require("./styles");
const Container = (props) => {
    const { children, size, className } = props;
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledContainer, Object.assign({ size: size, className: (0, classnames_1.default)('StyledContainer', className) }, { children: children })));
};
exports.default = Container;
