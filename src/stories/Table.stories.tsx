import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Table } from '../'
import { makeData } from '../utils'

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  columns: [
    {
      Header: 'FIRST NAME',
      accessor: 'firstName',
    },
    {
      Header: 'LAST NAME',
      accessor: 'lastName',
    },
    {
      Header: 'AGE',
      accessor: 'age',
    },
    {
      Header: 'VISITS',
      accessor: 'visits',
    },
    {
      Header: 'STATUS',
      accessor: 'status',
    },
    {
      Header: 'PROGRESS',
      accessor: 'progress',
    },
  ],
  data: makeData(50),
}
