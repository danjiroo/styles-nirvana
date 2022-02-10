/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navigation } from '../components'

import { v4 as uuidv4 } from 'uuid'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation',
  component: Navigation,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Navigation>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  nav_menus: {
    config: {
      is_enabled: true,
      max_item: 4,
    },
    items: [
      {
        application_name: 'Home',
        component_name: 'Home',
        application_id: `${uuidv4()}`,
        is_enabled: true,
        route: 'home',
      },
      {
        application_name: 'Documents',
        component_name: 'Documents',
        application_id: `${uuidv4()}`,
        is_enabled: true,
        route: 'documents',
      },
      {
        application_name: 'Surveys',
        component_name: 'Surveys',
        application_id: `${uuidv4()}`,
        is_enabled: true,
        route: 'surveys',
      },
      {
        application_name: 'E Sign Admin Tools',
        component_name: 'ESign',
        application_id: `${uuidv4()}`,
        is_enabled: true,
        children_items: [
          {
            name: 'Request',
            id: `${uuidv4()}`,
            route: 'request',
          },
          {
            name: 'Template',
            id: `${uuidv4()}`,
            route: 'template',
          },
          {
            name: 'Variables',
            id: `${uuidv4()}`,
            route: 'variables',
          },
        ],
      },
    ],
  },
}
