"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_table_1 = require("react-table");
const Table_1 = __importDefault(require("./Shell/Table"));
const styles_1 = require("./styles");
const { Header, Row, Cell, Body } = Table_1.default;
const Table = (props) => {
    const { columns = [], data = [] } = props;
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = (0, react_table_1.useTable)({
        columns,
        data,
    });
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledTable, Object.assign({}, getTableProps(), props, { children: [(0, jsx_runtime_1.jsx)(Header, { children: headerGroups.map((headerGroup) => ((0, jsx_runtime_1.jsx)(Row, Object.assign({}, headerGroup.getHeaderGroupProps(), { children: headerGroup.headers.map((column) => ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ header: true }, column.getHeaderProps(), { children: column.render('Header') }), void 0))) }), void 0))) }, void 0), (0, jsx_runtime_1.jsx)(Body, Object.assign({}, getTableBodyProps(), { children: rows.map((row) => {
                    prepareRow(row);
                    return ((0, jsx_runtime_1.jsx)(Row, Object.assign({}, row.getRowProps(), { children: row.cells.map((cell) => ((0, jsx_runtime_1.jsx)(Cell, Object.assign({}, cell.getCellProps(), { children: cell.render('Cell') }), void 0))) }), void 0));
                }) }), void 0)] }), void 0));
};
exports.default = Table;
