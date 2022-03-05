import React from 'react'
import { Handle, Position } from 'react-flow-renderer'

import { Question } from '../../../'
import { QuestionNodes } from '../../types'
import { StyledCustomNodeContainer } from './styles'

const CustomNodeComponent: React.FC<Pick<QuestionNodes, 'data'>> = ({
  data,
}) => (
  <StyledCustomNodeContainer>
    <Handle
      type='target'
      position={Position.Left}
      className='custom-node-handle center-left'
    />
    <Question {...data} />
    <Handle
      type='source'
      position={Position.Right}
      className='custom-node-handle top-right'
      id='top'
    />
    <Handle
      type='source'
      position={Position.Right}
      className='custom-node-handle bottom-right'
      id='btm'
    />
  </StyledCustomNodeContainer>
)

export default CustomNodeComponent
