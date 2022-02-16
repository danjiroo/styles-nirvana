import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    btnColor: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    layout: {
      control: {
        type: 'select',
      },
    },
  },
  args: {
    label: 'Save and Continue',
    btnColor: 'primary',
    size: 'md',
    layout: 'solid',
    rounded: true,
    isLoading: false,
    loadingLabel: 'Loading...',
    isDisabled: false,
    block: false,
    // onClick: () => alert('Button clicked!'),
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const withIcon = Template.bind({})
withIcon.args = {
  label: 'Submit',
  iconLeft: 'check',
}

export const withLoader = Template.bind({})
withLoader.args = {
  isLoading: true,
  loadingLabel: 'Updating...',
}
