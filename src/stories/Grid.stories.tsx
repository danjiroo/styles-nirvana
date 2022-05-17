import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { Grid } from '../applications'

export default {
  title: 'Work In Progress/Grid',
  component: Grid,
  decorators: [withMock],
  parameters: {
    xstate: true,
  },
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  appConfig: {
    storage_key: 'incomplete-surveys',
    query_entity: 'instances',
    enablePagination: true,
    columns: [
      {
        id: 'firstName',
        Header: 'FIRST NAME',
        accessor: 'firstName',
        show: true,
        width: 300,
      },
    ],
    initialState: {
      pageSize: 10,
      pageIndex: 0,
      paginationRange: 3,
    },
  },
  appParams: {
    // organizationCode: 'alliance',
    resultsPerPage: 10,
    page: 0,
    // includeDeleted: true,
    // includeUnpublishedVersions: true,
  },
}
Default.parameters = {
  xstate: {
    height: '1000px',
  },
  mockData: [
    {
      url: 'https://localhost:4001/appconfig',
      method: 'GET',
      status: 200,
      response: {
        data: {
          timeout_ms: 654123,
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
        },
      },
    },
  ],
}
