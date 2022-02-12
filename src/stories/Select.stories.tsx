/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import {
  SingleSelect as SingleSelectComponent,
  MultiSelect as MultiSelectComponent,
} from '../'

export default {
  title: 'Components/Select',
  component: SingleSelectComponent,
  argTypes: {},
  args: {
    // icon: 'user-add',
  },
} as ComponentMeta<typeof SingleSelectComponent>

const SingleSelectTemplate: ComponentStory<typeof SingleSelectComponent> = (
  args
) => {
  const [details, setDetails] = useState({
    username: '',
    email: '',
  })

  const handleChange = (e) => {
    // alert(selected?.value)
    console.log(e, 'x')
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value,
    })
  }

  return (
    <div>
      <SingleSelectComponent
        {...args}
        id='username'
        name='username'
        key='username'
        label='Single Select Sample'
        value={details?.username}
        valueData={details?.username}
        onChange={(e: any) => handleChange(e)}
      />
      <SingleSelectComponent
        {...args}
        id='email'
        name='email'
        key='email'
        label='Single Select Sample'
        value={details?.email}
        valueData={details?.email}
        onChange={(e: any) => handleChange(e)}
      />
    </div>
  )
}
const MultiSelectTemplate: ComponentStory<typeof MultiSelectComponent> = (
  args
) => <MultiSelectComponent {...args} />

export const SingleSelect = SingleSelectTemplate.bind({})
SingleSelect.args = {
  icon: 'user',
  selectOptions: ['Item A', 'Item B', 'Item C'],
  errorText: 'This field is required.',
  isClearable: true,
}

export const MultiSelect = MultiSelectTemplate.bind({})
MultiSelect.args = {
  id: 'email',
  name: 'email',
  key: 'email',
  // label: 'Multi Select Sample',
  icon: 'envelope',
  selectOptions: ['John Doe', 'John Smith', 'John Bruce'],
  errorText: 'This field is required.',
  isClearable: true,
}
