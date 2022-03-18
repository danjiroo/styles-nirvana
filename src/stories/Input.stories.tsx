/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Input, Question } from '../'

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
  const [_, updateArgs] = useArgs()

  const actionsProp: any = {
    handleChange: (data: any) => {
      const { name, value } = data
      updateArgs({ value })
    },
  }
  return (
    <>
      <Input {...args} actions={actionsProp} />
      <Input {...args} actions={actionsProp} />
    </>
  )
}

const Template2: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  const actionsProp: any = {
    handleChange: (data: any) => {
      const { name, value } = data
      setValue(value)
    },
  }
  return (
    <div>
      <Input {...args} value={value} actions={actionsProp} />
      <br />
      <h4>saved:</h4>
      <Question id='sampleid' question={value} name='Test' />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  value: '',
  placeholder: 'enter',
  label: 'sample label',
  name: 'text',
  accessor: 'value',
  disabled: false,
  size: 'md',
}

export const DefaultWithError = Template.bind({})
DefaultWithError.args = {
  type: 'text',
  value: '',
  placeholder: 'enter',
  label: 'sample label',
  name: 'text',
  accessor: 'value',
  disabled: false,
  size: 'md',
  error: true,
  errorText: 'This field is required.',
}

export const TextArea = Template.bind({})
TextArea.args = {
  type: 'textArea',
  value: '',
  placeholder: 'enter',
  label: 'sample label',
  name: 'textArea',
  accessor: 'value',
  disabled: false,
  size: 'md',
}

export const TextAreaWithMention = Template2.bind({})
TextAreaWithMention.args = {
  type: 'textAreaMention',
  value: '',
  placeholder: 'enter',
  label: 'sample label',
  name: 'textAreaMention',
  accessor: 'value',
  disabled: false,
  size: 'md',
  suggestions: [
    {
      id: 1,
      display: 'Option 1',
    },
    {
      id: 2,
      display: 'Option 2',
    },
    {
      id: 3,
      display: 'Option 3',
    },
  ],
}
