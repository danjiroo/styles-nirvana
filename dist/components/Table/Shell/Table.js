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
const Body_1 = __importDefault(require("./Body"));
const Cell_1 = __importDefault(require("./Cell"));
const Container_1 = __importDefault(require("./Container"));
const Footer_1 = __importDefault(require("./Footer"));
const Header_1 = __importDefault(require("./Header"));
const Row_1 = __importDefault(require("./Row"));
const Table = (props) => {
    const { className, children } = props, other = __rest(props, ["className", "children"]);
    return ((0, jsx_runtime_1.jsx)("table", Object.assign({ className: (0, classnames_1.default)('table', className) }, other, { children: children }), void 0));
};
exports.default = Object.assign(Table, {
    Container: Container_1.default,
    Header: Header_1.default,
    Body: Body_1.default,
    Row: Row_1.default,
    Cell: Cell_1.default,
    Footer: Footer_1.default,
}); // temp for build
