/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container, Input } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Container',
  component: Container,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Container>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

interface State {
  [key: string]: string
}
interface Data {
  name: string
  value: string
}
interface ActionsProps {
  handleChange: (data: Data) => void
}
const Template: ComponentStory<typeof Container> = (args) => {
  const [state, setState] = useState<State>({})
  const actionsProp: ActionsProps = {
    handleChange: (data) => {
      const { name, value } = data
      setState((prev) => ({
        ...prev,
        [name]: value,
      }))
    },
  }

  return (
    <Container {...args}>
      <Input
        value={state.value}
        type='text'
        field_type='text'
        placeholder='enter something'
        label='test'
        actions={actionsProp ?? {}}
        name='test'
        disabled={false}
        iconLeft='search-thick'
      />
    </Container>
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
