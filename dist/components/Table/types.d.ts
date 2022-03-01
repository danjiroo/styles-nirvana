/// <reference types="react" />
import { Column, CellProps, TableState } from 'react-table';
export interface OtherColumnProperties {
    show?: boolean;
    Cell?: (props?: CellProps<any>) => JSX.Element;
}
export declare type ExtendedColumns = Column & OtherColumnProperties;
export interface TableConfig {
    enablePagination: boolean;
    paginationRange: number;
}
export interface TableProps {
    config?: Partial<TableConfig>;
    columns: ExtendedColumns[];
    data: Record<string, unknown>[];
    initialState?: TableState;
    pagination?: {
        totalCount: number;
    };
}
