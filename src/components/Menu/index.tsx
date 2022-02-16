import React, { useState } from 'react'
import { MenuContent, MenuContainer, IconContainer } from './styled'
import { Icon } from '../'
import { MenuProps } from './types'

const Menu: React.FC<MenuProps> = (props) => {
  const { children, align } = props
  const [is_open, toggleOpen] = useState(true)
  const handleOpenMenu = () => toggleOpen(!is_open)
  return (
    <>
      <MenuContainer>
        <IconContainer align={align} onClick={handleOpenMenu}>
          <Icon iconName={is_open ? 'x-circle' : 'menu'} hoverable size='xl' />
        </IconContainer>
        <MenuContent align={align} is_open={is_open}>
          {children}
        </MenuContent>
      </MenuContainer>
    </>
  )
}

export default Menu
