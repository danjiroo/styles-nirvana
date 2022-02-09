/* eslint-disable no-use-before-define */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Card, Button, Image, Input, Progress } from '../'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

const Template2: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <h2>Card Title</h2>
    <Image alt='' src='' />
    <Input
      type='text'
      iconLeft='world-outline'
      value=''
      name='card-input'
      placeholder='Lorem ipsum...'
      actions={{
        handleChange: (data) => {
          console.log('Card Input:', data)
        },
      }}
    />
    <Button label='Click' rounded={false} block={true} />
  </Card>
)

const Template3: ComponentStory<typeof Progress> = (args) => {
  const handleClick = () => {
    alert('CARD IN STORY CLICKED!')
  }

  return (
    <Card {...args} handleClick={handleClick}>
      <Progress progress={args?.progress ?? 25} />
    </Card>
  )
}

const Template4: ComponentStory<typeof Progress> = (args) => {
  const range = [5, 22, 88, 13]
  const group = range.map((num: number) => (
    <Template3 {...args} key={num} progress={num} />
  ))

  return <StyledGroup>{group}</StyledGroup>
}

export const Default = Template.bind({})
export const WithChildrenComponents = Template2.bind({})
export const WithProgress = Template3.bind({})
WithProgress.args = {
  zoomOnHover: true,
}

export const WithGroupProgress = Template4.bind({})
WithGroupProgress.args = {
  zoomOnHover: true,
}

export const ClickableCard = Template3.bind({})
ClickableCard.args = {
  zoomOnHover: true,
  clickable: true,
}

const StyledGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
