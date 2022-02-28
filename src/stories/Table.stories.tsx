import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Table, Icon, List } from '../'
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
      Cell: (props) => (
        <Icon
          clickable
          hoverable
          hasDropdown
          iconName='more-horizontal'
          dropdown={() => (
            <List
              size='sm'
              position='right'
              hasPointer
              hoverable
              clickable
              asDropDown
              list={[
                {
                  id: '1',
                  component: (
                    <button
                      onClick={() =>
                        console.log('@debugButton Edit', props.original)
                      }
                    >
                      Edit
                    </button>
                  ),
                },
                {
                  id: '2',
                  component: (
                    <button
                      onClick={() =>
                        console.log('@debugButton Preview', props.original)
                      }
                    >
                      Preview
                    </button>
                  ),
                },
                {
                  id: '3',
                  component: (
                    <button
                      onClick={() =>
                        console.log('@debugButton Delete', props.original)
                      }
                    >
                      Delete
                    </button>
                  ),
                },
              ]}
            />
          )}
        />
      ),
      show: true,
    },
  ] as ExtendedColumns[],
  data: makeData(50),
}
