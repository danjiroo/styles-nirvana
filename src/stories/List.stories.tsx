/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { List } from '../'

export default {
  title: 'Components/List',
  component: List,
  args: {
    list: [
      {
        id: '1',
        component: <button onClick={() => {}}>Edit</button>,
      },
      {
        id: '2',
        component: <button onClick={() => {}}>Preview</button>,
      },
      {
        id: '3',
        component: <button onClick={() => {}}>Delete</button>,
      },
    ],
  },
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})
Default.args = {
  position: 'left',
}
