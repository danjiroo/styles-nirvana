"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const react_1 = require("react");
const react_table_1 = require("react-table");
const Table_1 = __importDefault(require("./Shell/Table"));
const styles_1 = require("./styles");
const __1 = require("../");
const { Header, Row, Cell, Body } = Table_1.default;
const Table = (props) => {
    var _a;
    const { columns = [], data = [] } = props;
    const [updatedColumns, setUpdatedColumns] = (0, react_1.useState)(columns);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setHiddenColumns, getToggleAllRowsSelectedProps,
    // selectedFlatRows,
     } = (0, react_table_1.useTable)({
        // @ts-ignore
        columns: updatedColumns,
        data,
        initialState: {
            hiddenColumns: [],
        },
    }, react_table_1.useSortBy, react_table_1.useRowSelect);
    const onColumnsUpdate = () => {
        if (columns.length) {
            columns.map((column) => {
                if (!column.show) {
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
        : (props) => ((0, jsx_runtime_1.jsx)(__1.Icon, { clickable: true, iconName: 'more-horizontal', onClick: () => console.log('@debugIcon', props.original) }, void 0));
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledTable, Object.assign({}, getTableProps(), props, { children: [(0, jsx_runtime_1.jsx)(Header, { children: headerGroups.map((headerGroup) => ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, headerGroup.getHeaderGroupProps(), { children: [(checkboxColumn === null || checkboxColumn === void 0 ? void 0 : checkboxColumn.show) && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ header: true, className: 'checkbox' }, { children: (0, jsx_runtime_1.jsx)(CheckboxColumnComponent, Object.assign({}, getToggleAllRowsSelectedProps === null || getToggleAllRowsSelectedProps === void 0 ? void 0 : getToggleAllRowsSelectedProps()), void 0) }), void 0)), headerGroup.headers.map((column) => ((0, jsx_runtime_1.jsxs)(Cell, Object.assign({ header: true }, column.getHeaderProps(column.getSortByToggleProps()), { children: [column.render('Header'), (0, jsx_runtime_1.jsx)(styles_1.StyledSortIconContainer, { children: column.isSorted ? (column.isSortedDesc ? ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-down', size: 'xs' }, void 0)) : ((0, jsx_runtime_1.jsx)(__1.Icon, { iconName: 'chevron-up', size: 'xs' }, void 0))) : null }, void 0)] }), void 0)))] }), void 0))) }, void 0), (0, jsx_runtime_1.jsx)(Body, Object.assign({}, getTableBodyProps(), { children: rows.map((row) => {
                    const { getToggleRowSelectedProps } = row;
                    prepareRow(row);
                    return ((0, jsx_runtime_1.jsxs)(Row, Object.assign({}, row.getRowProps(), { children: [(checkboxColumn === null || checkboxColumn === void 0 ? void 0 : checkboxColumn.show) && ((0, jsx_runtime_1.jsx)(Cell, Object.assign({ className: 'checkbox' }, { children: (0, jsx_runtime_1.jsx)(CheckboxColumnComponent, Object.assign({}, getToggleRowSelectedProps === null || getToggleRowSelectedProps === void 0 ? void 0 : getToggleRowSelectedProps()), void 0) }), void 0)), row.cells.map((cell) => ((0, jsx_runtime_1.jsx)(Cell, Object.assign({}, cell.getCellProps(), { children: cell.column.id === 'actions' ? ((0, jsx_runtime_1.jsx)(ActionsColumnComponent, Object.assign({}, cell.row), void 0)) : (cell.render('Cell')) }), void 0)))] }), void 0));
                }) }), void 0)] }), void 0));
};
exports.default = Table;
