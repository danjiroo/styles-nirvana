import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Login } from '../applications'

export default {
  title: 'Applications/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />

export const Default = Template.bind({})
