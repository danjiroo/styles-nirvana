import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ReactFlow } from '..'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/React Flow',
  component: ReactFlow,
} as ComponentMeta<typeof ReactFlow>

const Template: ComponentStory<typeof ReactFlow> = (args) => (
  <ReactFlow {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
