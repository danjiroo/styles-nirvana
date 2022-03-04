/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { StyledSidebar } from './styles'
import { ReactFlowProps } from '../../types'

import Option from './Option'

const Sidebar: React.FC<Pick<ReactFlowProps, 'dndOptions'>> = ({
  dndOptions,
}) => (
  <StyledSidebar>
    <div className='react-flow-sidebar-options'>
      {dndOptions?.map(({ id, component, node_type }) => {
        const OptionChildComponent: React.ElementType = component

        return (
          <Option key={id} id={id} node_type={node_type}>
            <OptionChildComponent />
          </Option>
        )
      })}
    </div>
  </StyledSidebar>
)

export default Sidebar
