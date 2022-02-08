/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react'
import { StyledInput, InputContainer, Label, StyledIcon } from './styles'
import { FormInputProps } from './types'
import { Icon } from '../'

const Input: React.FC<FormInputProps> = (props) => {
  const {
    value,
    placeholder,
    label,
    actions,
    name,
    type,
    accessor,
    disabled,
    field_type,
    customTheme,
    iconLeft = 'search-thick',
    icon,
    layout = 'solid',
    size = 'base',
    btnColor = 'primary',
  } = props
  const [is_input_active, setInputActive] = useState(false)
  const [is_label_click, setLabelClick] = useState(false)

  const handleInputChange = (event: any) => {
    const { value, name } = event.target
    console.log('INSIDE HANDLE INPUT value', value)
    console.log('INSIDE HANDLE INPUT name', name)
    actions.handleChange?.({ value, name, accessor })
  }

  const handleLabelClick = () => {
    setLabelClick(() => true)
  }

  const inputRef = useRef<any>()
  useEffect(() => {
    if (is_label_click === true) {
      inputRef.current.focus()
    }
  }, [is_label_click])

  useEffect(() => {
    if (value === '' || null || undefined) {
      setInputActive(false)
      setLabelClick(false)
    }
    if (value) setInputActive(true)
  }, [value])

  const handleBlurInput = () => {
    if (value === '' || null || undefined) {
      setInputActive(false)
      setLabelClick(false)
    }
  }

  const IconLeft = iconLeft || icon

  console.log('base input:', props)

  return (
    <InputContainer>
      {label && (
        <Label is_input_active={is_input_active} onClick={handleLabelClick}>
          {label}
        </Label>
      )}
      {IconLeft && (
        <StyledIcon>
          <div className='button-icon-div'>
            <Icon
              iconName={IconLeft}
              color={layout === 'solid' ? 'light' : btnColor}
              size={size}
            />
          </div>
        </StyledIcon>
      )}

      {type && type === 'text' && (
        <StyledInput
          type={field_type}
          value={value}
          placeholder={is_input_active ? placeholder : ''}
          onChange={handleInputChange}
          onFocus={() => setInputActive(true)}
          onClick={() => setInputActive(true)}
          onBlur={handleBlurInput}
          ref={inputRef}
          disabled={disabled}
          name={name}
          customTheme={customTheme}
        />
      )}
    </InputContainer>
  )
}

export default Input
