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
  value: '',
  type: 'text',
  field_type: 'text',
  placeholder: 'enter',
  // label: 'sample label',
  name: '',
  accessor: 'value',
  disabled: false,
  // customTheme: {
  //   background_color: '#DEDEFF',
  //   outline_color: 'yellow',
  //   border_radius: "25px",
  // },
  size: 'md',
}
