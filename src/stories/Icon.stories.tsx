/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { Icon, List } from '../'
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
    <>
      <StyledIconDivLeft>
        <Icon {...args} iconName={iconName} />
      </StyledIconDivLeft>
      <StyledIconDivRight>
        <IconReference handleClick={handleClick} />
      </StyledIconDivRight>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  iconName: 'activity',
  color: 'primary',
}

export const ClickableWithDropdown = Template.bind({})
ClickableWithDropdown.args = {
  hasDropdown: true,
  clickable: true,
  hoverable: true,
  iconName: 'user',
  dropdown: () => (
    <List
      size='sm'
      hasPointer
      clickable
      hoverable
      rounded
      asDropDown
      list={[
        {
          id: '1',
          component: <button>Edit</button>,
        },
        {
          id: '2',
          component: <button>Preview</button>,
        },
        {
          id: '3',
          component: <button>Delete</button>,
        },
      ]}
    />
  ),
}

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
