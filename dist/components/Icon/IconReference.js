"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const IconList_1 = require("./IconList");
require("./assets/styles.css");
const List = ({ name, handleClick }) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: () => handleClick(name) }, { children: [(0, jsx_runtime_1.jsx)("div", { className: `icon icon-${name}` }, void 0), (0, jsx_runtime_1.jsx)(StyledInput, { type: 'text', readOnly: true, value: name }, void 0)] }), void 0));
const IconReference = (props) => ((0, jsx_runtime_1.jsxs)(StyledDiv, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Icon Reference" }, void 0), (0, jsx_runtime_1.jsx)("h2", { children: "CSS mapping" }, void 0), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: 'glyphs css-mapping' }, { children: IconList_1.iconArray.map((name) => ((0, jsx_runtime_1.jsx)(List, Object.assign({ name: name }, props), name))) }), void 0)] }, void 0));
exports.default = IconReference;
const StyledDiv = styled_components_1.default.div `
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  body {
    line-height: 1;
    color: #000;
    background: #fff;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: separate;
    border-spacing: 0;
    vertical-align: middle;
  }
  caption,
  th,
  td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle;
  }
  a img {
    border: none;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body {
    font-family: 'Dosis', 'Tahoma', sans-serif;
  }
  .container {
    margin: 15px auto;
    width: 80%;
  }
  h1 {
    margin: 40px 0 20px;
    font-weight: 700;
    font-size: 38px;
    line-height: 32px;
    color: #fb565e;
  }
  h2 {
    font-size: 18px;
    padding: 0 0 21px 5px;
    margin: 45px 0 0 0;
    text-transform: uppercase;
    font-weight: 500;
  }
  .small {
    font-size: 14px;
    color: #a5adb4;
  }
  .small a {
    color: #a5adb4;
  }
  .small a:hover {
    color: #fb565e;
  }
  .glyphs.character-mapping {
    margin: 0 0 20px 0;
    padding: 20px 0 20px 30px;
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid #d8e0e5;
    border-radius: 3px;
  }
  .glyphs.character-mapping li {
    margin: 0 30px 20px 0;
    display: inline-block;
    width: 90px;
  }
  .glyphs.character-mapping .icon {
    margin: 10px 0 10px 15px;
    padding: 15px;
    position: relative;
    width: 55px;
    height: 55px;
    color: #162a36 !important;
    overflow: hidden;
    border-radius: 3px;
    font-size: 32px;
  }
  .glyphs.character-mapping .icon svg {
    fill: #000;
  }
  .glyphs.character-mapping input {
    margin: 0;
    padding: 5px 0;
    line-height: 12px;
    font-size: 12px;
    display: block;
    width: 100%;
    border: 1px solid #d8e0e5;
    border-radius: 5px;
    text-align: center;
    outline: 0;
  }
  .glyphs.character-mapping input:focus {
    border: 1px solid #fbde4a;
    -webkit-box-shadow: inset 0 0 3px #fbde4a;
    box-shadow: inset 0 0 3px #fbde4a;
  }
  .glyphs.character-mapping input:hover {
    -webkit-box-shadow: inset 0 0 3px #fbde4a;
    box-shadow: inset 0 0 3px #fbde4a;
  }
  .glyphs.css-mapping {
    margin: 0 0 60px 0;
    padding: 30px 0 20px 30px;
    color: rgba(0, 0, 0, 0.5);
    border: 1px solid #d8e0e5;
    border-radius: 3px;
  }
  .glyphs.css-mapping li {
    margin: 0 30px 20px 0;
    padding: 0;
    display: inline-block;
    overflow: hidden;
  }
  .glyphs.css-mapping .icon {
    margin: 0;
    margin-right: 10px;
    padding: 13px;
    height: 50px;
    width: 50px;
    color: #162a36 !important;
    overflow: hidden;
    float: left;
    font-size: 24px;
  }
  .glyphs.css-mapping input {
    margin: 0;
    margin-top: 5px;
    padding: 8px;
    line-height: 16px;
    font-size: 16px;
    display: block;
    width: 150px;
    height: 40px;
    border: 1px solid #d8e0e5;
    border-radius: 5px;
    background: #fff;
    outline: 0;
    float: right;
  }
  .glyphs.css-mapping input:focus {
    border: 1px solid #fbde4a;
    -webkit-box-shadow: inset 0 0 3px #fbde4a;
    box-shadow: inset 0 0 3px #fbde4a;
  }
  .glyphs.css-mapping input:hover {
    -webkit-box-shadow: inset 0 0 3px #fbde4a;
    box-shadow: inset 0 0 3px #fbde4a;
  }
`;
const StyledInput = styled_components_1.default.input `
  cursor: pointer;
`;
//# sourceMappingURL=IconReference.js.map