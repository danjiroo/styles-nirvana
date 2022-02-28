/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import { Column } from 'react-table'

export interface OtherColumnProperties {
  show?: boolean
  id: string
  // Cell: React.Component
  Cell?: any
}

export type ExtendedColumns = Column & OtherColumnProperties

export interface TableProps {
  columns: ExtendedColumns[]
  data: Record<string, unknown>[]
}
