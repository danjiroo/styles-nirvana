"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
const react_1 = require("react");
const __1 = require("../");
const styles_1 = require("./styles");
const SearchResults_1 = __importDefault(require("./SearchResults"));
const Search = (props) => {
    const [searchText, setSearchText] = (0, react_1.useState)('');
    // TODO : temp
    const sampleResults = [
        {
            id: '1',
            title: 'Sample Result 1',
        },
        {
            id: '2',
            title: 'Sample Result 2',
        },
        {
            id: '3',
            title: 'Sample Result 3',
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledSearch, Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Test Search" }, void 0), (0, jsx_runtime_1.jsx)("p", { children: "This is still in progress, need to have Input component modified before this." }, void 0), (0, jsx_runtime_1.jsx)(__1.Input, { type: 'text', value: searchText, name: 'global-search', placeholder: 'Search anything...', actions: {
                    handleChange: (data) => {
                        var _a;
                        console.log('Global Search', data);
                        setSearchText((_a = data === null || data === void 0 ? void 0 : data.value) !== null && _a !== void 0 ? _a : '');
                    },
                } }, void 0), (0, jsx_runtime_1.jsx)(SearchResults_1.default, { results: sampleResults, handleClick: (data) => alert(`Clicked searched item: ${JSON.stringify(data)}`) }, void 0)] }), void 0));
};
exports.default = Search;
//# sourceMappingURL=index.js.map