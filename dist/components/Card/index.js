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
const styles_1 = require("./styles");
const Card = (_a) => {
    var { children, zoomOnHover = false, clickable = false, handleClick } = _a, rest = __rest(_a, ["children", "zoomOnHover", "clickable", "handleClick"]);
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledCard, Object.assign({}, rest, { zoomOnHover: zoomOnHover, onClick: () => (clickable ? handleClick === null || handleClick === void 0 ? void 0 : handleClick() : {}) }, { children: children }), void 0));
};
exports.default = Card;
//# sourceMappingURL=index.js.map