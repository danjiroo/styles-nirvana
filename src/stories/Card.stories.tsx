/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Card, Button, Image, Input, Progress } from '../'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
  args: {
    height: 350,
  },
} as ComponentMeta<typeof Card>

const DefaultCardTemplate: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
)

const CardWithChildrenTemplate: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <h2>Card Title</h2>
    <Image alt='' src='' />
    <Input
      id='1'
      type='text'
      iconLeft='user'
      value=''
      name='card-input'
      placeholder='Lorem ipsum...'
      actions={{
        handleChange: (data) => {},
      }}
    />
    <Button label='Click' rounded={false} block={true} />
  </Card>
)

const CardWithHandleClickTemplate: ComponentStory<typeof Progress> = (args) => {
  const handleClick = () => {
    alert('CARD IN STORY CLICKED!')
  }

  return (
    <Card {...args} handleClick={handleClick}>
      <Progress progress={args?.progress ?? 25} />
    </Card>
  )
}

const CardWithCardGroupTemplate: ComponentStory<typeof Progress> = (args) => {
  const range = [5, 22, 88, 13]
  const group = range.map((num: number) => (
    <CardWithHandleClickTemplate {...args} key={num} progress={num} />
  ))

  return <StyledGroup>{group}</StyledGroup>
}

const CardWithModalLogicTemplate: ComponentStory<typeof Card> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = () => {
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <p>This is a sample component.</p>
      <Button label='Open Modal' onClick={handleToggleModal} />
      {isModalOpen && (
        <StyledModalContainer>
          <CardWithChildrenTemplate {...args} handleClose={handleClose} />
        </StyledModalContainer>
      )}
    </div>
  )
}

export const Default = DefaultCardTemplate.bind({})
export const WithChildrenComponents = CardWithChildrenTemplate.bind({})
export const WithProgress = CardWithHandleClickTemplate.bind({})
WithProgress.args = {
  zoomOnHover: true,
}

export const WithGroupProgress = CardWithCardGroupTemplate.bind({})
WithGroupProgress.args = {
  zoomOnHover: true,
}

export const ClickableCard = CardWithHandleClickTemplate.bind({})
ClickableCard.args = {
  zoomOnHover: true,
  clickable: true,
}

export const AsModal = CardWithModalLogicTemplate.bind({})
AsModal.args = {
  mode: 'modal',
  closeable: true,
}

const StyledGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const StyledModalContainer = styled.div`
  background: rgba(207, 207, 207, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`
