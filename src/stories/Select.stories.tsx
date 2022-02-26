/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'

import { Select, Container, Checkbox } from '../'

export default {
  title: 'Components/Select',
  component: Select,
  args: {},
} as ComponentMeta<typeof Select>

const selectArgTypes = {
  selectOptions: {
    description: 'Array of options for the dropdown items',
  },
  error: {
    control: {
      type: 'boolean',
    },
    description: 'Error fetching options',
  },
  errorText: {
    control: {
      type: 'text',
    },
    description: 'Text shown when error is true',
  },
  icon: {
    control: {
      type: 'text',
    },
    description: 'Enable creation of a non-existing item',
  },
  isClearable: {
    control: {
      type: 'boolean',
    },
    description: 'Is selection option clearable?',
  },
  isCreatable: {
    control: {
      type: 'boolean',
    },
    description: 'Enable creation of a non-existing item',
  },
  isRequired: {
    control: {
      type: 'boolean',
    },
    description: 'Is required',
  },
  isDisabled: {
    control: {
      type: 'boolean',
    },
    description: 'Is disabled',
  },
  isLoading: {
    control: {
      type: 'boolean',
    },
    description: 'Is currently loading or fetching items',
  },
  label: {
    control: {
      type: 'text',
    },
    description: 'Upper text for the dropdown',
  },
  placeholder: {
    control: {
      type: 'text',
    },
    description: 'Placeholder text in input field',
  },
  isMulti: {
    control: {
      type: 'boolean',
    },
    description: 'Enable multi selection',
  },
  rounded: {
    control: {
      type: 'boolean',
    },
    description: 'Enable border-radius',
  },
  labelKey: {
    control: {
      type: 'text',
    },
    description:
      'This key will be shown as an option label for your select component',
  },
  valueKey: {
    control: {
      type: 'text',
    },
    description: 'This key will be the selected value upon clicking an option.',
  },
}

const SelectTemplate: ComponentStory<typeof Select> = (args) => {
  const [details, setDetails] = useState({
    username: '',
    email: '',
  })

  const handleChange = (e) => {
    console.log('Selected:', e)
    const { name, value } = e.target as any
    const { value: selectedValue } = value ?? {}

    setDetails({
      ...details,
      [name]:
        typeof selectedValue === 'string' || typeof selectedValue === 'number'
          ? selectedValue
          : [...value],
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

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChecked = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { checked = false } = e.target
    setChecked(checked)
  }

  return <Checkbox {...args} checked={checked} onChange={handleChecked} />
}

export const SingleSelect = SelectTemplate.bind({})
SingleSelect.args = {
  icon: 'box',
  // selectOptions: ['John Doe', 'John Smith', 'John Bruce'],
  // selectOptions: [1, 2, 3],
  selectOptions: [
    { id: 1, name: 'Jayson', age: 29 },
    { id: 2, name: 'Lee', age: 11 },
    { id: 3, name: 'Avhy', age: 26 },
  ],
  label: 'Single Select Sample',
  errorText: 'This field is required.',
  labelKey: 'name',
  valueKey: 'id',
  isClearable: true,
}
SingleSelect.argTypes = selectArgTypes

export const MultiSelect = SelectTemplate.bind({})
MultiSelect.args = {
  icon: 'mail',
  label: 'Multi Select Sample',
  // selectOptions: ['John Doe', 'John Smith', 'John Bruce'],
  // selectOptions: [1, 2, 3],
  selectOptions: [
    { id: 1, name: 'Jayson', age: 29 },
    { id: 2, name: 'Lee', age: 11 },
    { id: 3, name: 'Avhy', age: 26 },
  ],
  errorText: 'This field is required.',
  labelKey: 'name',
  valueKey: 'id',
  isClearable: true,
  isMulti: true,
}
MultiSelect.argTypes = selectArgTypes

export const CheckBox = CheckboxTemplate.bind({})
CheckBox.args = {
  label: 'Sample',
}
