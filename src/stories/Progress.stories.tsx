/* eslint-disable no-use-before-define */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Progress } from '../'

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
)

export const Default = Template.bind({})
Default.args = {
  progress: 40,
}
