import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DropZone } from '../'

export default {
  title: 'Components/DropZone',
  component: DropZone,
} as ComponentMeta<typeof DropZone>

const Template: ComponentStory<typeof DropZone> = (args) => (
  <DropZone {...args} />
)

export const Default = Template.bind({})
Default.args = {}
