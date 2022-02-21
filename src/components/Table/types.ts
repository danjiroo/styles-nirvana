/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TableColumn {
  Header: string
  columns?: TableColumn[]
  accessor?: string
}

export interface TableProps {
  columns: any // TableColumn[];
  data: Record<string, unknown>[]
}
