/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-body-style */
import React from 'react'

import { Button, Card } from '../../../'
import { StyledModalContainer } from './styles'

export interface ModalProps {
  setIsOpen: (o: boolean) => void
  setRules: (o: any) => void
  handleSaveRule: () => void
  handleRemoveRule: () => void
  rules: Record<string, any>
}

const Modal: React.FC<ModalProps> = ({
  setIsOpen,
  handleSaveRule,
  handleRemoveRule,
  rules,
}) => {
  return (
    <StyledModalContainer>
      <Card
        className='custom-edige-card'
        closeable
        closeIconName='x'
        // hasPointer
        pointerPosition='right'
        handleClose={() => setIsOpen(false)}
      >
        <h3>Question 2</h3>
        <div className='top-btns'>'If' User Selects 'Answer'</div>
        <p>Go to Question 4.</p>
        <div className='btm-btns'>
          <Button label='Add Rule' icon='plus' layout='outline' size='xs' />
          {!Object.keys(rules ?? {})?.length ? (
            <Button label='Save Rule' size='xs' onClick={handleSaveRule} />
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
    </StyledModalContainer>
  )
}

export default Modal
