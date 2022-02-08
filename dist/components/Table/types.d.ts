export interface TableColumn {
    Header: string;
    columns?: TableColumn[];
    accessor?: string;
}
export interface TableProps {
    columns: any;
    data: Record<string, unknown>[];
}
