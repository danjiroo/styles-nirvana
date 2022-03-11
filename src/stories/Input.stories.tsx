/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Input } from '../'

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
  return <Input {...args} actions={actionsProp} />
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

export const TextAreaWithMention = Template.bind({})
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
