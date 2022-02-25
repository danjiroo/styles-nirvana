import React from 'react'

import { StyledCheckbox } from './styles'
import { CheckboxProps } from './types'

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { label } = props

  return (
    <StyledCheckbox>
      {label && <span className='title'>{label}</span>}
      <input type='checkbox' {...props} />
      <span className='checkmark'></span>
    </StyledCheckbox>
  )
}

export default Checkbox
