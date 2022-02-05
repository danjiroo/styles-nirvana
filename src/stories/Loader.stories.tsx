import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RaySpinner, Spinner } from '../'
import { RaySpinnerProps } from '../components/RaySpinner/types'

export default {
  title: 'Components/Loader',
  component: RaySpinner,
} as Meta

const Template: Story<RaySpinnerProps> = (args) => <RaySpinner {...args} />
const Template2: Story = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {}

export const DotSpinner = Template.bind({})
DotSpinner.args = {
  color: '#525252',
  size: 40,
  rayHeight: 5,
  rayWidth: 5,
  rayRadius: 50,
}

export const Basic = Template2.bind({})
Basic.args = {}
