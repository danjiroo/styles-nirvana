import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menu, Navigation } from '../components'
import { v4 as uuidv4 } from 'uuid'

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => {
  const nav_menus = {
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
  }

  return (
    <Menu {...args}>
      <Navigation nav_menus={nav_menus} />
    </Menu>
  )
}

export const Primary = Template.bind({})
