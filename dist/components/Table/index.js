"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
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
    const { columns = [], data = [], initialState = {}, config = {} } = props;
    const { enablePagination = true, paginationRange = 5 } = config;
    const [updatedColumns, setUpdatedColumns] = (0, react_1.useState)(columns);
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows, 
    // selectedFlatRows,
    setHiddenColumns, getToggleAllRowsSelectedProps, 
    // pagination react-table
    page, // Instead of using 'rows', we'll use page, which has only the rows for the active page
    canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize }, } = (0, react_table_1.useTable)({
        columns: updatedColumns,
        data,
        initialState,
        // manualPagination: true,
        // pageCount: props.pagination?.totalCount,
    }, react_table_1.useSortBy, react_table_1.usePagination, react_table_1.useRowSelect);
    const [range, setRange] = (0, react_1.useState)({
        start: 1,
        end: paginationRange !== null && paginationRange !== void 0 ? paginationRange : 1,
    });
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
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        pageIndex,
        pageSize,
        range,
        setRange,
        paginationRange,
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledTableContainer, { children: [(0, jsx_runtime_1.jsxs)(styles_1.StyledTable, Object.assign({}, getTableProps(), { children: [(0, jsx_runtime_1.jsx)(Header, { children: headerGroups.map((headerGroup) => ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, headerGroup.getHeaderGroupProps(), { children: [(checkboxColumn === null || checkboxColumn === void 0 ? void 0 : checkboxColumn.show) && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ header: true, className: 'checkbox' }, { children: (0, jsx_runtime_1.jsx)(CheckboxColumnComponent, Object.assign({}, getToggleAllRowsSelectedProps === null || getToggleAllRowsSelectedProps === void 0 ? void 0 : getToggleAllRowsSelectedProps()), void 0) }), void 0)), headerGroup.headers.map((column) => ((0, jsx_runtime_1.jsxs)(Cell, Object.assign({ header: true }, column.getHeaderProps(column.getSortByToggleProps()), { style: { width: column.width } }, { children: [column.render('Header'), (0, jsx_runtime_1.jsx)(styles_1.StyledSortIconContainer, { children: column.isSorted ? (column.isSortedDesc ? ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-down', size: 'xs' }, void 0)) : ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-up', size: 'xs' }, void 0))) : null }, void 0)] }), void 0)))] }), void 0))) }, void 0), (0, jsx_runtime_1.jsx)(Body, Object.assign({}, getTableBodyProps(), { children: (enablePagination ? page : rows).map((row) => {
                            const { getToggleRowSelectedProps } = row;
                            prepareRow(row);
                            return ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, row.getRowProps(), { children: [(checkboxColumn === null || checkboxColumn === void 0 ? void 0 : checkboxColumn.show) && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ className: 'checkbox' }, { children: (0, jsx_runtime_1.jsx)(CheckboxColumnComponent, Object.assign({}, getToggleRowSelectedProps === null || getToggleRowSelectedProps === void 0 ? void 0 : getToggleRowSelectedProps()), void 0) }), void 0)), row.cells.map((cell) => ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ className: cell.column.id === 'actions' && 'table-actions' }, cell.getCellProps(), { style: {
                                            width: cell.column.width,
                                        } }, { children: cell.column.id === 'actions' ? ((0, jsx_runtime_1.jsx)(ActionsColumnComponent, Object.assign({}, cell), void 0)) : (cell.render('Cell')) }), void 0)))] }), void 0));
                        }) }), void 0)] }), void 0), enablePagination && (0, jsx_runtime_1.jsx)(DefaultPagination_1.default, Object.assign({}, paginationProps), void 0)] }, void 0));
};
exports.default = Table;
