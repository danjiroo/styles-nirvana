/* eslint-disable no-use-before-define */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Progress } from '../'

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
)

const Template2: ComponentStory<typeof Progress> = (args) => {
  const range = [5, 22, 88, 13]
  const group = range.map((num: number) => (
    <Progress {...args} key={num} progress={num} />
  ))

  return <StyledGroup>{group}</StyledGroup>
}

export const Default = Template.bind({})
Default.args = {
  progress: 40,
}

export const CardGroup = Template2.bind({})
CardGroup.args = {}

const StyledGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin: 0 5px;
  }
`
