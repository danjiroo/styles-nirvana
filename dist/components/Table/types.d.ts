import React from 'react';
import { Column } from 'react-table';
export interface OtherColumnProperties {
    show?: boolean;
    Cell?: React.ElementType;
}
export declare type ExtendedColumns = Column & OtherColumnProperties;
export interface TableProps {
    columns: ExtendedColumns[];
    data: Record<string, unknown>[];
}
