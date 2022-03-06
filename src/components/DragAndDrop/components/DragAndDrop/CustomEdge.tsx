/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react'
import { getBezierPath, getEdgeCenter, getMarkerEnd } from 'react-flow-renderer'

import { StyledContainer } from './styles'
import { Button, Icon, Card } from '../../../'

const foreignObjectSize = 1

const CustomEdge: React.FC<any> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) => {
  const [rules, setRules] = useState<any[]>(
    Object.values(data?.rules ?? {}) ?? []
  )
  const [isOpen, setIsOpen] = useState(false)

  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId)
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  })

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()

    setIsOpen(!isOpen)
  }

  const handleSaveRule = () => {
    // temporary
    setRules([
      {
        id: '1-rule',
        rule: 'Test Rule',
      },
    ])
  }

  const handleRemoveRule = () => {
    // temporary
    setRules([])
  }

  return (
    <>
      <path
        id={id}
        style={style}
        className='react-flow__edge-path'
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        style={{ overflow: 'visible' }}
        className='edgebutton-foreignobject'
        requiredExtensions='http://www.w3.org/1999/xhtml'
      >
        <StyledContainer hasRule={!!rules?.length} pointerPosition='right'>
          <Icon
            iconName={rules?.length ? 'check' : 'plus'}
            size='sm'
            color='light'
            colorWeight='50'
            clickable
            hoverable
            className='custom-edge-icon-btn'
            onClick={handleClick}
          />
          {isOpen && (
            <Card
              className='custom-edige-card'
              closeable
              closeIconName='x'
              hasPointer
              pointerPosition='right'
              handleClose={() => setIsOpen(false)}
            >
              <h3>Question 2</h3>
              <div className='top-btns'>'If' User Selects 'Answer'</div>
              <p>Go to Question 4.</p>
              <div className='btm-btns'>
                <Button
                  label='Add Rule'
                  icon='plus'
                  layout='outline'
                  size='xs'
                />
                {!rules?.length ? (
                  <Button
                    label='Save Rule'
                    size='xs'
                    onClick={handleSaveRule}
                  />
                ) : (
                  <Button
                    label='Remove Rule'
                    color='danger'
                    size='xs'
                    onClick={handleRemoveRule}
                  />
                )}
              </div>
            </Card>
          )}
        </StyledContainer>
      </foreignObject>
    </>
  )
}

export default CustomEdge
