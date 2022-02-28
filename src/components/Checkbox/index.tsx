/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FormEvent } from 'react'

import { StyledCheckbox } from './styles'
import { CheckboxProps } from './types'

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { label, onChange, checked = false, indeterminate = false } = props

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    onChange?.(e)
  }

  return (
    <StyledCheckbox>
      {label && <span className='title'>{label}</span>}
      <input
        type='checkbox'
        onChange={handleChange}
        checked={checked}
        // @ts-ignore
        indeterminate={indeterminate ? 'true' : 'false'}
      />
      <span className='checkmark'></span>
    </StyledCheckbox>
  )
}

export default Checkbox
