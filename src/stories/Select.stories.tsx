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
  color: {
    description: 'Theme color for select',
  },
  colorWeight: {
    description: 'Theme color weight for select',
  },
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

const SelectTemplate: ComponentStory<typeof Select | any> = (args) => {
  const { tempGuide, ...realProps } = args

  const [details, setDetails] = useState({
    username: [],
  })

  const handleChange = (data) => {
    console.log('Selected:', data)
    const { name, value } = data

    setDetails({
      ...details,
      [name]:
        typeof value === 'string' || typeof value === 'number'
          ? value
          : [...value],
    })
  }

  return (
    <Container size='sm'>
      <h4>{tempGuide}</h4>
      <br />
      <Select {...realProps} handleChange={handleChange} />
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

export const SingleSelectWithStringOptions = SelectTemplate.bind({})
SingleSelectWithStringOptions.args = {
  name: 'username',
  icon: 'box',
  selectOptions: ['John Doe', 'John Smith', 'John Bruce'],
  errorText: 'This field is required.',
  isClearable: true,
  label: 'Single Select',
  tempGuide: 'Single Select With Options as Array of Strings',
}
SingleSelectWithStringOptions.argTypes = selectArgTypes

export const SingleSelectWithNumberOptions = SelectTemplate.bind({})
SingleSelectWithNumberOptions.args = {
  name: 'username',
  icon: 'box',
  selectOptions: [1, 2, 3],
  errorText: 'This field is required.',
  isClearable: true,
  label: 'Single Select',
  tempGuide: 'Single Select With Options as Array of Numbers',
}
SingleSelectWithNumberOptions.argTypes = selectArgTypes

export const SingleSelectWithObjectOptions = SelectTemplate.bind({})
SingleSelectWithObjectOptions.args = {
  name: 'username',
  icon: 'box',
  selectOptions: [
    { id: 'idjayson1', name: 'Jayson', age: 29 },
    { id: 'idlee2', name: 'Lee', age: 11 },
    { id: 'idavhy3', name: 'Avhy', age: 26 },
  ],
  errorText: 'This field is required.',
  selectOptionsAsObject: {
    labelKey: 'name',
    valueKey: 'id',
  },
  isClearable: true,
  label: 'Single Select',
  tempGuide:
    'Single Select With Options as Array of Objects (Control option display with labelKey, and value result with valueKey)',
}
SingleSelectWithObjectOptions.argTypes = selectArgTypes

export const MultiSelectWithStringOptions = SelectTemplate.bind({})
MultiSelectWithStringOptions.args = {
  name: 'username',
  icon: 'mail',
  selectOptions: ['Justain', 'Jayson', 'Lee', 'Avhy'],
  errorText: 'This field is required.',
  isClearable: true,
  isMulti: true,
  label: 'Multi Select',
  tempGuide: 'Multi Select With Options as Array of Strings',
}
MultiSelectWithStringOptions.argTypes = selectArgTypes

export const MultiSelectWithNumberOptions = SelectTemplate.bind({})
MultiSelectWithNumberOptions.args = {
  name: 'username',
  icon: 'mail',
  selectOptions: [1, 2, 3, 4],
  errorText: 'This field is required.',
  selectOptionsAsObject: {
    labelKey: 'name',
    valueKey: 'id',
  },
  isClearable: true,
  isMulti: true,
  label: 'Multi Select',
  tempGuide: 'Multi Select With Options as Array of Strings',
}
MultiSelectWithNumberOptions.argTypes = selectArgTypes

export const MultiSelectWithObjectOptions = SelectTemplate.bind({})
MultiSelectWithObjectOptions.args = {
  name: 'username',
  icon: 'mail',
  selectOptions: [
    { id: 'idjayson1', name: 'Jayson', age: 29 },
    { id: 'idlee2', name: 'Lee', age: 11 },
    { id: 'idavhy3', name: 'Avhy', age: 26 },
  ],
  errorText: 'This field is required.',
  selectOptionsAsObject: {
    labelKey: 'name',
    valueKey: 'id',
  },
  isClearable: true,
  isMulti: true,
  label: 'Multi Select',
  tempGuide:
    'Multi Select With Options as Array of Objects (Control option display with labelKey, and value result with valueKey)',
}
MultiSelectWithObjectOptions.argTypes = selectArgTypes

export const CheckBox = CheckboxTemplate.bind({})
CheckBox.args = {
  label: 'Sample',
}
