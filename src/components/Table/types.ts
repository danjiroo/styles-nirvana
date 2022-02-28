/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import React from 'react'
import { Column, CellProps } from 'react-table'

export interface OtherColumnProperties {
  show?: boolean
  Cell?: (props?: CellProps<any>) => JSX.Element
}

export type ExtendedColumns = Column & OtherColumnProperties

export interface TableProps {
  columns: ExtendedColumns[]
  data: Record<string, unknown>[]
}
