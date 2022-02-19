/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Icon } from '../'
import IconReference from '../components/Icon/IconReference'

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    size: 'md',
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
  const [iconName, setIconName] = useState(args?.iconName)

  const handleClick = (iconName: string) => {
    setIconName(iconName)
  }

  return (
    <StyledDiv>
      <StyledIconDivLeft>
        <Icon {...args} iconName={iconName} />
      </StyledIconDivLeft>
      <StyledIconDivRight>
        <IconReference handleClick={handleClick} />
      </StyledIconDivRight>
    </StyledDiv>
  )
}

export const Default = Template.bind({})
Default.args = {
  iconName: 'activity',
  color: 'primary',
}

const StyledDiv = styled.div`
  box-sizing: border-box;
`

const StyledIconDivLeft = styled.div`
  width: 80px;
  height: 80px;
  padding: 20px;
  border: 2px solid #ddd;

  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIconDivRight = styled.div`
  padding-left: 150px;
`
