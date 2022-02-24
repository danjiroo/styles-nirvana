"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const react_table_1 = require("react-table");
const Table_1 = __importDefault(require("./Shell/Table"));
const styles_1 = require("./styles");
const __1 = require("../");
const { Header, Row, Cell, Body } = Table_1.default;
const Table = (props) => {
    var _a, _b;
    const { columns = [], data = [] } = props;
    const [updatedColumns, setUpdatedColumns] = (0, react_1.useState)([]);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setHiddenColumns, getToggleAllRowsSelectedProps, } = (0, react_table_1.useTable)({
        // @ts-ignore
        columns: updatedColumns,
        data,
        initialState: {
            hiddenColumns: [],
        },
    }, react_table_1.useSortBy, react_table_1.useRowSelect);
    const gotColumns = () => {
        if (columns.length) {
            columns.map((column) => {
                if (!column.show) {
                    setHiddenColumns((prev) => [...prev, column.id]);
                }
            });
            const updatedColumns = columns.filter((column) => column.id !== 'selection' && column.id !== 'actions');
            setUpdatedColumns(updatedColumns);
        }
    };
    (0, react_1.useEffect)(gotColumns, [columns]);
    const showSelectionColumn = (_b = (_a = columns === null || columns === void 0 ? void 0 : columns.find((column) => column.id === 'selection')) === null || _a === void 0 ? void 0 : _a.show) !== null && _b !== void 0 ? _b : false;
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledTable, Object.assign({}, getTableProps(), props, { showSelection: false }, { children: [(0, jsx_runtime_1.jsx)(Header, { children: headerGroups.map((headerGroup) => ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, headerGroup.getHeaderGroupProps(), { children: [showSelectionColumn && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ header: true, className: 'selection' }, { children: (0, jsx_runtime_1.jsx)("input", Object.assign({ type: 'checkbox' }, getToggleAllRowsSelectedProps()), void 0) }), void 0)), headerGroup.headers.map((column) => ((0, jsx_runtime_1.jsxs)(Cell, Object.assign({ header: true }, column.getHeaderProps(column.getSortByToggleProps()), { children: [column.render('Header'), (0, jsx_runtime_1.jsx)(styles_1.StyledSortIconContainer, { children: column.isSorted ? (column.isSortedDesc ? ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-down', size: 'xs' }, void 0)) : ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-up', size: 'xs' }, void 0))) : null }, void 0)] }), void 0)))] }), void 0))) }, void 0), (0, jsx_runtime_1.jsx)(Body, Object.assign({}, getTableBodyProps(), { children: rows.map((row) => {
                    prepareRow(row);
                    return ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, row.getRowProps(), { children: [showSelectionColumn && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ className: 'selection' }, { children: (0, jsx_runtime_1.jsx)("input", Object.assign({ type: 'checkbox' }, row.getToggleRowSelectedProps()), void 0) }), void 0)), row.cells.map((cell) => ((0, jsx_runtime_1.jsx)(Cell, Object.assign({}, cell.getCellProps(), { children: cell.render('Cell') }), void 0)))] }), void 0));
                }) }), void 0)] }), void 0));
};
exports.default = Table;
