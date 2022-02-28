/// <reference types="react" />
import { Column, CellProps } from 'react-table';
export interface OtherColumnProperties {
    show?: boolean;
    Cell?: (props?: CellProps<any>) => JSX.Element;
}
export declare type ExtendedColumns = Column & OtherColumnProperties;
export interface TableProps {
    columns: ExtendedColumns[];
    data: Record<string, unknown>[];
}
