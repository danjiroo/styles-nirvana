import React from 'react'

import {
  StyledNavWrapper,
  StyledList,
  StyledNavLink,
  StyledNavWithChildren,
} from './styles'
import { navigation_config } from './data'
import { NavigationConfig, ChildrenMenuItems } from './types'

const Navigation = () => {
  const { nav_menus } = navigation_config as NavigationConfig
  const { config, items } = nav_menus
  console.log('navigation_config:', navigation_config)
  return (
    <StyledNavWrapper>
      {config.is_enabled &&
        items.map(
          ({
            application_name,
            children_items = null,
            route = '',
            application_id,
          }) => (
            <menu key={application_id}>
              <StyledList>
                {children_items ? (
                  <>
                    <StyledNavWithChildren children_items={children_items}>
                      {application_name}
                    </StyledNavWithChildren>
                    {children_items.map((child_nav: ChildrenMenuItems) => (
                      <menu>
                        <StyledList>
                          <StyledNavLink to={`/${child_nav.route}`}>
                            {child_nav.name}
                          </StyledNavLink>
                        </StyledList>
                      </menu>
                    ))}
                  </>
                ) : (
                  <h4>
                    <StyledNavLink to={`/${route}`}>
                      {application_name}
                    </StyledNavLink>
                  </h4>
                )}
              </StyledList>
            </menu>
          )
        )}
    </StyledNavWrapper>
  )
}

export default Navigation
