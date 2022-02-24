import { Column } from 'react-table';
export interface OtherColumnProperties {
    show?: boolean;
    id: string;
}
export declare type ExtendedColumns = Column & OtherColumnProperties;
export interface TableProps {
    columns: ExtendedColumns[];
    data: Record<string, unknown>[];
}
