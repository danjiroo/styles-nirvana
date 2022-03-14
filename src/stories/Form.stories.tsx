/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form } from '../components'

export default {
  title: 'Components/Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => {
  const fields = {
    test: {
      label: 'test',
      required: true,
      place_holder: 'enter test',
      name: 'test',
      field_type: 'text',
      icon: 'search',
    },
  }
  const someSideEffect = <T,>(data: T) => {}

  return (
    <Form
      {...args}
      title='THIS IS A TEST FORM'
      onSubmit={someSideEffect}
      fields={fields}
    />
  )
}

export const Default = Template.bind({})
