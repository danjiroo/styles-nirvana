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
        <IconContainer align={align}>
          <Icon
            iconName={is_open ? 'close' : 'burger-menu'}
            color='light'
            size='base'
            onClick={handleOpenMenu}
          />
        </IconContainer>
        <MenuContent align={align} is_open={is_open}>
          {children}
        </MenuContent>
      </MenuContainer>
    </>
  )
}

export default Menu
