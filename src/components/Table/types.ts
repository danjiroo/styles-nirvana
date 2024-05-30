/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import React from 'react'
import { Column, CellProps, TableState, TableRowProps } from 'react-table'

export interface OtherColumnProperties {
  show?: boolean
  Cell?: (props?: CellProps<any>) => JSX.Element
}

export type ExtendedColumns = Column & OtherColumnProperties

export interface TableConfig {
  enablePagination: boolean
  showCurrentPage?: boolean
  initialState: {
    pageSize: number
    pageIndex?: number
    paginationRange?: number
    sortOrder?: 'ascending' | 'descending'
    sortBy?: string
  }
}

export interface TablePagination {
  currentPage: number
  currentResultCount: number
  totalPageCount: number
  totalResultCount: number
}

export interface TableActionHandlers {
  onNext: () => void
  onPrevious: () => void
  onJumpToFirst: () => void
  onJumpToLast: () => void
  onJumpToPage: (page: number) => void
  onChecked: () => void
}

export interface TableProps {
  columns: ExtendedColumns[]
  data: Record<string, unknown>[]
  actions: TableActionHandlers

  options?: {
    config?: Partial<TableConfig>
    pagination?: TablePagination
  }

  isLoading?: boolean
  customComponent?: (item: Record<string, any>) => void
}
