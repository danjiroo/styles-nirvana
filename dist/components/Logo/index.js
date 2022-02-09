"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const placeholder_png_1 = __importDefault(require("../Image/assets/placeholder.png"));
const styles_1 = require("./styles");
const Logo = (props) => {
    const { alt = 'company logo', src = '', companyName, tagLine } = props;
    const imageSrc = src || placeholder_png_1.default;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledLogoContainer, Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)(__1.Image, { src: imageSrc, alt: alt }, void 0), companyName && ((0, jsx_runtime_1.jsxs)("h4", { children: [companyName, " ", tagLine && (0, jsx_runtime_1.jsx)("span", { children: tagLine }, void 0)] }, void 0))] }), void 0));
};
exports.default = Logo;
//# sourceMappingURL=index.js.map