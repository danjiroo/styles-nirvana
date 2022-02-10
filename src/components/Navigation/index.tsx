import React from 'react'
import {
  StyledNavWrapper,
  StyledNavLink,
  StyledNavWithChildren,
} from './styles'
import { ChildrenMenuItems, NavigationProp } from './types'

const Navigation: React.FC<NavigationProp> = ({ nav_menus }) => {
  const { config, items } = nav_menus
  return (
    <StyledNavWrapper>
      {config.is_enabled &&
        items.map(
          ({
            component_name,
            children_items = null,
            route = '',
            application_id,
          }) => (
            <menu key={application_id}>
              {children_items ? (
                <>
                  <StyledNavWithChildren
                    className='StyledNavWithChildren'
                    children_items={children_items}
                  >
                    {component_name}
                  </StyledNavWithChildren>
                  {children_items.map((child_nav: ChildrenMenuItems) => (
                    <menu key={child_nav.id}>
                      <StyledNavLink
                        className='styled-navlink--inner'
                        to={`/${child_nav.route}`}
                      >
                        {child_nav.name}
                      </StyledNavLink>
                    </menu>
                  ))}
                </>
              ) : (
                <StyledNavLink className='styled-list' to={`/${route}`}>
                  {component_name}
                </StyledNavLink>
              )}
            </menu>
          )
        )}
    </StyledNavWrapper>
  )
}

export default Navigation
