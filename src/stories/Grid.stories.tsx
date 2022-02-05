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
    // this option is passed to the devTools instance to use a different inspector
    // inspectUrl: 'https://stately.ai/viz?inspect',
  },
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {}
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
