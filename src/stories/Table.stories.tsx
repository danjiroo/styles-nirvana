/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Table } from '../'
import { TableProps, ExtendedColumns } from '../components/Table/types'
import { makeData } from '../utils'

export default {
  title: 'Components/Table',
  component: Table,
  args: {
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
    options: {
      pagination: {
        currentPage: 1,
        currentResultCount: 5,
        totalPageCount: 3,
        totalResultCount: 11,
      },
      config: {
        enablePagination: true,
        initialState: {
          pageSize: 5,
          pageIndex: 0,
          paginationRange: 5,
        },
      },
    },
    actions: {
      onNext: () => {},
      onPrevious: () => {},
      onJumpToFirst: () => {},
      onJumpToLast: () => {},
      onJumpToPage: () => {},
      onChecked: () => {},
    },
  },
} as Meta<TableProps>

const Template: Story<TableProps> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithCustomComponent = Template.bind({})
WithCustomComponent.args = {
  customComponent: ({ row }) => (
    <div>
      {row.cells.map((cell) => (
        <div
          className='test-custom-component'
          {...cell.getCellProps()}
          style={{
            width: cell.column.width,
          }}
        >
          {cell.render('Cell')}
        </div>
      ))}
    </div>
  ),
}
