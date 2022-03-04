/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container, Input } from '../components'

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>

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
        placeholder='enter something'
        label='test'
        actions={actionsProp ?? {}}
        name='test'
        disabled={false}
        iconLeft='search'
      />
    </Container>
  )
}

export const Default = Template.bind({})
