/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import { Select, Container } from '../'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
  args: {
    // icon: 'user-add',
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const [details, setDetails] = useState({
    username: '',
    email: '',
  })

  const handleChange = (e) => {
    console.log('Selected:', e)
    const { name, value } = e.target
    setDetails({
      ...details,
      [name]: value?.value,
    })
  }

  return (
    <Container size='sm'>
      <Select
        {...args}
        name='username'
        value={details?.username}
        valueData={details?.username}
        handleChange={handleChange}
      />
      <Select
        {...args}
        name='email'
        value={details?.email}
        valueData={details?.email}
        handleChange={handleChange}
      />
    </Container>
  )
}

export const SingleSelect = Template.bind({})
SingleSelect.args = {
  icon: 'box',
  // selectOptions: ['John Doe', 'John Smith', 'John Bruce'],
  // selectOptions: [1, 2, 3],
  selectOptions: [
    { name: 'Jayson', age: 29 },
    { name: 'Lee', age: 11 },
    { name: 'Avhy', age: 11 },
  ],
  label: 'Single Select Sample',
  errorText: 'This field is required.',
  labelKey: 'name',
  valueKey: 'age',
  isClearable: true,
}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  icon: 'mail',
  label: 'Multi Select Sample',
  // selectOptions: ['John Doe', 'John Smith', 'John Bruce'],
  // selectOptions: [1, 2, 3],
  selectOptions: [
    { name: 'Jayson', age: 29 },
    { name: 'Lee', age: 11 },
    { name: 'Avhy', age: 11 },
  ],
  errorText: 'This field is required.',
  labelKey: 'name',
  valueKey: 'age',
  isClearable: true,
  isMulti: true,
}
