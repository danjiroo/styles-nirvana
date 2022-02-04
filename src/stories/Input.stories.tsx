/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from '../'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const actionsProp: any = {
  handleChange: (data: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { name, value } = data
  },
}

Primary.args = {
  value: '',
  type: 'text',
  field_type: 'text',
  placeholder: 'enter',
  label: 'email',
  name: 'email',
  accessor: 'value',
  disabled: false,
  actions: actionsProp ?? {},
  // theme: {
  //   // background_color: "gray",
  //   outline_color: "yellow",
  //   // border_radius: "25px",
  // },
}
