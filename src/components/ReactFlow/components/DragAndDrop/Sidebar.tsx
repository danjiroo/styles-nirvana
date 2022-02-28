/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { StyledSidebar } from './styles'
import { ReactFlowProps } from '../../types'

import Option from './Option'

const Sidebar: React.FC<ReactFlowProps> = ({ dndOptions }) => (
  <StyledSidebar>
    <div className='description'>
      You can drag these nodes to the pane on the left.
      <p>Select a node and press backspace to remove it from the left pane.</p>
    </div>
    <div className='react-flow-sidebar-options'>
      {dndOptions?.map(({ id, component, node_type }) => {
        const OptionChildComponent: any = component

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
