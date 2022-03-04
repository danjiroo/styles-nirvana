/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import cn from 'classnames'

import { StyledSidebar } from './styles'
import { ReactFlowProps } from '../../types'

import Option from './Option'

export interface SidebarProps extends Pick<ReactFlowProps, 'dndOptions'> {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({
  dndOptions,
  children,
  className,
}) => (
  <StyledSidebar className={cn(className)}>
    <div className='react-flow-sidebar-options'>
      {dndOptions?.length ? (
        <div>
          {dndOptions?.map(({ id, component, node_type }) => {
            const OptionChildComponent: React.ElementType = component

            return (
              <Option key={id} id={id} node_type={node_type}>
                <OptionChildComponent />
              </Option>
            )
          })}
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  </StyledSidebar>
)

export default Sidebar
