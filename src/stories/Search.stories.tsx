import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Search } from '../'

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />

export const Default = Template.bind({})
Default.args = {}
