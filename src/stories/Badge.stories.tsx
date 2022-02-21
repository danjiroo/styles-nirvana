import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from '../'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
  args: {
    label: 'DQ',
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: () => alert('Close button clicked!'),
}
