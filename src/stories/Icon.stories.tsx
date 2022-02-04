/* eslint-disable no-use-before-define */
/* eslint-disable no-empty-pattern */
import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import styled from 'styled-components'

import { Icon } from '../'
import { IconProps } from '../components/Icon/types'
import IconReference from '../components/Icon/IconReference'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => {
  const [{}, updateArgs] = useArgs()
  const [iconName, setIconName] = useState(args?.iconName)
  const handleClick = (iconName: string) => {
    setIconName(iconName)
    updateArgs({ iconName })
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
  iconName: 'delete',
  color: 'secondary',
  size: 'lg',
}

const StyledDiv = styled.div`
  box-sizing: border-box;
  font-family: 'Calibri';
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
