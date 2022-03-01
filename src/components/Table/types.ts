/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import React from 'react'
import { Column, CellProps, TableState } from 'react-table'

export interface OtherColumnProperties {
  show?: boolean
  Cell?: (props?: CellProps<any>) => JSX.Element
}

export type ExtendedColumns = Column & OtherColumnProperties

export interface TableConfig {
  enablePagination: boolean
  paginationRange: number
}

export interface TablePagination {
  currentPage: number
  currentResultCount: number
  totalPageCount: number
  totalResultCount: number
}

export interface TableActionHandlers {
  handleNext: () => void
  handlePrevious: () => void
  handleJumpToFirst: () => void
  hgandleJumpToLast: () => void
  handleJumpToPage: () => void
  handleChecked: () => void
}

export interface TableProps {
  config?: Partial<TableConfig>
  columns: ExtendedColumns[]
  data: Record<string, unknown>[]
  initialState?: TableState
  pagination?: TablePagination
  actions: TableActionHandlers
}
