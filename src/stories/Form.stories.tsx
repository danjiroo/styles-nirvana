/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Form } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form',
  component: Form,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Form>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof Form> = (args) => {
  const fields = {
    test: {
      label: 'test',
      required: true,
      place_holder: 'enter test',
      name: 'test',
      field_type: 'text',
      icon: 'search-thick',
    },
  }
  const someSideEffect = <T,>(data: T) => {
    console.log('SOME SIDE EFFECTS: DO SOMETHING WITH THIS DATA', data)
  }

  return (
    <Form
      {...args}
      title='THIS IS A TEST FORM'
      onSubmit={someSideEffect}
      fields={fields}
    />
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
