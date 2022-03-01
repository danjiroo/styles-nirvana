import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Table } from '../'
import { TableProps, ExtendedColumns } from '../components/Table/types'
import { makeData } from '../utils'

export default {
  title: 'Components/Table',
  component: Table,
} as Meta<TableProps>

const Template: Story<TableProps> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  columns: [
    {
      id: 'selection',
      show: true,
    },
    {
      id: 'firstName',
      Header: 'FIRST NAME',
      accessor: 'firstName',
      show: true,
      width: 300,
    },
    {
      id: 'lastName',
      Header: 'LAST NAME',
      accessor: 'lastName',
      show: false,
    },
    {
      id: 'age',
      Header: 'AGE',
      accessor: 'age',
      show: true,
    },
    {
      id: 'visits',
      Header: 'VISITS',
      accessor: 'visits',
      show: true,
    },
    {
      id: 'status',
      Header: 'STATUS',
      accessor: 'status',
      show: false,
    },
    {
      id: 'progress',
      Header: 'PROGRESS',
      accessor: 'progress',
      show: false,
    },
    {
      id: 'actions',
      Header: 'ACTIONS',
      show: true,
    },
  ] as ExtendedColumns[],
  data: makeData(11),
  initialState: {
    pageSize: 5,
  },
  pagination: {
    currentPage: 1,
    currentResultCount: 5,
    totalPageCount: 3,
    totalResultCount: 11,
  },
  config: {
    enablePagination: true,
    paginationRange: 5,
  },
  actions: {
    handleNext: () => console.log({ type: 'NEXT' }),
    handlePrevious: () => console.log({ type: 'PREVIOUS' }),
    handleJumpToFirst: () => console.log({ type: 'JUMP_TO_FIRST' }),
    hgandleJumpToLast: () => console.log({ type: 'JUMP_TO_LAST' }),
    handleJumpToPage: () => console.log({ type: 'JUMP_TO_PAGE' }),
    handleChecked: () => console.log({ type: 'CHECKED' }),
  },
} as TableProps
