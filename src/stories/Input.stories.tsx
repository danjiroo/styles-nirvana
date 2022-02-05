/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Input } from '../'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  const [_, updateArgs] = useArgs()

  const actionsProp: any = {
    handleChange: (data: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { name, value } = data
      updateArgs({ value })
    },
  }
  return <Input {...args} actions={actionsProp} />
}

console.log('NAG DAGAN KO')
export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  value: '',
  type: 'text',
  field_type: 'text',
  placeholder: 'enter',
  label: 'email',
  name: 'email',
  accessor: 'value',
  disabled: false,
  // customTheme: {
  //   background_color: '#DEDEFF',
  //   outline_color: 'yellow',
  //   border_radius: "25px",
  // },
}
