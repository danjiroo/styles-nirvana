import { ComponentStory, ComponentMeta } from '@storybook/react'

import { List } from '../'

export default {
  title: 'Components/List',
  component: List,
  args: {
    list: [
      {
        id: '1',
        component: <button onClick={() => console.log('Edit')}>Edit</button>,
      },
      {
        id: '2',
        component: (
          <button onClick={() => console.log('Preview')}>Preview</button>
        ),
      },
      {
        id: '3',
        component: (
          <button onClick={() => console.log('Delete')}>Delete</button>
        ),
      },
    ],
  },
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})
Default.args = {
  position: 'left',
}
