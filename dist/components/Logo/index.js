"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const styles_1 = require("./styles");
const Logo = (props) => {
    const { alt = 'company logo', src = '', companyName, tagLine } = props;
    // const SVGComponent =
    //   !src.includes('http') &&
    //   require(`../../assets/svg/${src}.svg`).ReactComponent
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledLogoContainer, Object.assign({}, props, { children: [src.includes('http') ? (0, jsx_runtime_1.jsx)(__1.Image, { src: src, alt: alt }) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), companyName && ((0, jsx_runtime_1.jsxs)("h4", { children: [companyName, " ", tagLine && (0, jsx_runtime_1.jsx)("span", { children: tagLine })] }))] })));
};
exports.default = Logo;
