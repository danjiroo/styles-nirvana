/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
// import { Story, Meta } from '@storybook/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import styled from 'styled-components'

import { Icon } from '../'
// import { IconProps } from '../components/Icon/types'
import IconReference from '../components/Icon/IconReference'

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    size: 'base',
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
  // const [_, updateArgs] = useArgs()
  const [iconName, setIconName] = useState(args?.iconName)

  const handleClick = (iconName: string) => {
    setIconName(iconName)
    // updateArgs({ iconName })
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
  iconName: 'world-outline',
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
