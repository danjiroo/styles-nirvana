import React from 'react'
import { ReactFlowProvider } from 'react-flow-renderer'

import Dropbox from './Dropbox'
import Sidebar from './Sidebar'

import { StyledDnDContainer } from './styles'
import { ReactFlowProps } from '../../types'

const DragAndDrop: React.FC<ReactFlowProps> = (props) => (
  <StyledDnDContainer {...props}>
    <ReactFlowProvider>
      <Sidebar {...props} />
      <Dropbox {...props} />
    </ReactFlowProvider>
  </StyledDnDContainer>
)

export default DragAndDrop
