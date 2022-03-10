"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const Container = (props) => {
    const { children, size } = props;
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledContainer, Object.assign({ size: size, className: 'StyledContainer' }, { children: children })));
};
exports.default = Container;
