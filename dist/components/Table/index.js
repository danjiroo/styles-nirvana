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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const react_1 = require("react");
const react_table_1 = require("react-table");
const Table_1 = __importDefault(require("./Shell/Table"));
const styles_1 = require("./styles");
const __1 = require("../");
const DefaultActionsColumn_1 = __importDefault(require("./DefaultActionsColumn"));
const DefaultPagination_1 = __importDefault(require("./DefaultPagination"));
const { Header, Row, Cell, Body } = Table_1.default;
const Table = (props) => {
    var _a;
    const { columns = [], data = [], actions, options, isLoading = false } = props;
    const { config } = options !== null && options !== void 0 ? options : {};
    const { enablePagination = true, initialState } = config !== null && config !== void 0 ? config : {};
    const _b = initialState !== null && initialState !== void 0 ? initialState : {}, { paginationRange } = _b, restInitialState = __rest(_b, ["paginationRange"]);
    const [updatedColumns, setUpdatedColumns] = (0, react_1.useState)(columns);
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, setHiddenColumns, getToggleAllRowsSelectedProps, rows, page, } = (0, react_table_1.useTable)({
        columns: updatedColumns,
        data,
        initialState: restInitialState,
    }, react_table_1.useSortBy, react_table_1.usePagination, react_table_1.useRowSelect);
    const onColumnsUpdate = () => {
        if (columns.length) {
            columns.map((column) => {
                if (!column.show) {
                    // @ts-ignore
                    setHiddenColumns((prev) => [...prev, column.id]);
                }
            });
            const updatedColumns = columns.filter(({ id, show }) => id !== 'selection' && show);
            setUpdatedColumns(updatedColumns);
        }
    };
    (0, react_1.useEffect)(onColumnsUpdate, [columns]);
    const getColumn = (columnId) => columns.find((column) => column.id === columnId);
    const checkboxColumn = getColumn('selection');
    const actionsColumn = getColumn('actions');
    const CheckboxColumnComponent = (_a = checkboxColumn === null || checkboxColumn === void 0 ? void 0 : checkboxColumn.Cell) !== null && _a !== void 0 ? _a : __1.Checkbox;
    const ActionsColumnComponent = (actionsColumn === null || actionsColumn === void 0 ? void 0 : actionsColumn.Cell)
        ? actionsColumn === null || actionsColumn === void 0 ? void 0 : actionsColumn.Cell
        : DefaultActionsColumn_1.default;
    const paginationProps = {
        options,
        actions,
        isLoading,
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledTableAndPaginationContainer, { children: [(0, jsx_runtime_1.jsx)(styles_1.StyledTableContainer, Object.assign({ className: 'table-container' }, { children: (0, jsx_runtime_1.jsxs)(styles_1.StyledTable, Object.assign({}, getTableProps(), { children: [(0, jsx_runtime_1.jsx)(Header, { children: headerGroups.map((headerGroup) => ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, headerGroup.getHeaderGroupProps(), { children: [(checkboxColumn === null || checkboxColumn === void 0 ? void 0 : checkboxColumn.show) && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ header: true, className: 'checkbox' }, { children: (0, jsx_runtime_1.jsx)(CheckboxColumnComponent, Object.assign({}, getToggleAllRowsSelectedProps === null || getToggleAllRowsSelectedProps === void 0 ? void 0 : getToggleAllRowsSelectedProps())) }))), headerGroup.headers.map((column) => ((0, jsx_runtime_1.jsxs)(Cell, Object.assign({ header: true }, column.getHeaderProps(column.getSortByToggleProps()), { style: { width: column.width } }, { children: [column.render('Header'), (0, jsx_runtime_1.jsx)(styles_1.StyledSortIconContainer, { children: column.isSorted ? (column.isSortedDesc ? ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-down', size: 'xs' })) : ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-up', size: 'xs' }))) : null })] }))))] })))) }), (0, jsx_runtime_1.jsx)(Body, Object.assign({}, getTableBodyProps(), { children: (enablePagination ? page : rows).map((row) => {
                                const { getToggleRowSelectedProps } = row;
                                prepareRow(row);
                                return ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, row.getRowProps(), { children: [(checkboxColumn === null || checkboxColumn === void 0 ? void 0 : checkboxColumn.show) && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ className: 'checkbox' }, { children: (0, jsx_runtime_1.jsx)(CheckboxColumnComponent, Object.assign({}, getToggleRowSelectedProps === null || getToggleRowSelectedProps === void 0 ? void 0 : getToggleRowSelectedProps())) }))), row.cells.map((cell) => ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ className: cell.column.id === 'actions' && 'table-actions' }, cell.getCellProps(), { style: {
                                                width: cell.column.width,
                                            } }, { children: cell.column.id === 'actions' ? ((0, jsx_runtime_1.jsx)(ActionsColumnComponent, Object.assign({}, cell))) : (cell.render('Cell')) }))))] })));
                            }) }))] })) })), enablePagination && (0, jsx_runtime_1.jsx)(DefaultPagination_1.default, Object.assign({}, paginationProps))] }));
};
exports.default = Table;
