"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const SearchResults = ({ results = [], handleClick, }) => {
    const lists = results === null || results === void 0 ? void 0 : results.map((result) => {
        const { id, title = 'Sample Title' } = result;
        return ((0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: () => handleClick(result) }, { children: title }), id));
    });
    return (0, jsx_runtime_1.jsx)(styles_1.StyledResultsContainer, { children: lists }, void 0);
};
exports.default = SearchResults;
//# sourceMappingURL=SearchResults.js.map