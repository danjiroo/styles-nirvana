"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
const react_1 = require("react");
const __1 = require("../");
const styles_1 = require("./styles");
const SearchResults_1 = __importDefault(require("./SearchResults"));
const Search = (props) => {
    // This is kinda messy; since this is still temporary
    const [isSearching, setIsSearching] = (0, react_1.useState)(false);
    const [showResults, setShowResults] = (0, react_1.useState)(false);
    const [searchText, setSearchText] = (0, react_1.useState)('');
    const ref = (0, react_1.useRef)(null);
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
    const handleSearching = () => {
        if (!searchText) {
            setIsSearching(false);
        }
        else {
            setIsSearching(true);
        }
    };
    // still needs fixing
    const handleSearchResult = () => {
        const sampleTimer = setTimeout(() => {
            setShowResults(true);
            setIsSearching(false);
        }, 2000);
        return () => {
            clearTimeout(sampleTimer);
        };
    };
    const handleClickOutside = () => {
        // TODO types
        const handleClick = (e) => {
            // @ts-ignore
            if (ref.current && !ref.current.contains(e.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    };
    (0, react_1.useEffect)(handleSearching, [searchText]);
    (0, react_1.useEffect)(handleSearchResult, [isSearching]);
    (0, react_1.useEffect)(handleClickOutside, []);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, props, { ref: ref }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Test Search" }), (0, jsx_runtime_1.jsx)("p", { children: "This is still in progress, need to have Input component modified before this." }), (0, jsx_runtime_1.jsxs)(styles_1.StyledInputContainer, Object.assign({ ref: ref }, { children: [(0, jsx_runtime_1.jsx)(__1.Input, { id: 'search-id', type: 'text', value: searchText, name: 'global-search', iconLeft: 'search', placeholder: 'Search anything...', actions: {
                            handleChange: (data) => {
                                var _a;
                                setSearchText((_a = data === null || data === void 0 ? void 0 : data.value) !== null && _a !== void 0 ? _a : '');
                            },
                        } }), isSearching && ((0, jsx_runtime_1.jsx)(__1.RaySpinner, { className: 'search-spinner', size: 'xs', rayHeight: 6, rayWidth: 4 }))] })), showResults && !!searchText && ((0, jsx_runtime_1.jsx)(SearchResults_1.default, { results: sampleResults, handleClick: (data) => alert(`Clicked searched item: ${JSON.stringify(data)}`) }))] })));
};
exports.default = Search;
