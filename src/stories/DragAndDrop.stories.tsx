import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Badge } from '..'

export default {
  title: 'Components/Drag And Drop',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <DndProvider backend={HTML5Backend}>
    <Badge {...args} />
  </DndProvider>
)

export const Default = Template.bind({})
Default.args = {
  label: 'in progress',
}
