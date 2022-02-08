import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ReactFlow } from '..'

export default {
  title: 'Components/React Flow',
  component: ReactFlow,
} as ComponentMeta<typeof ReactFlow>

const Template: ComponentStory<typeof ReactFlow> = (args) => (
  <ReactFlow {...args} />
)

export const Default = Template.bind({})
Default.args = {}
