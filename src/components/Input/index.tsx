/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react'
import {
  StyledInput,
  StyledTextArea,
  InputContainer,
  Label,
  StyledIcon,
} from './styles'
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
    customTheme,
    iconLeft = 'search',
    icon,
    layout = 'solid',
    size = 'md',
    color = 'primary',
  } = props
  const [is_input_active, setInputActive] = useState(false)
  const [is_label_click, setLabelClick] = useState(false)

  const handleInputChange = (event: any) => {
    const { value, name } = event.target
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
              color={layout === 'solid' ? 'light' : color}
              size={size}
            />
          </div>
        </StyledIcon>
      )}

      {type && type === 'text' && (
        <StyledInput
          value={value}
          placeholder={label && is_input_active ? placeholder : ''}
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

      {type && type === 'textArea' && (
        <StyledTextArea
          value={value}
          placeholder={label && is_input_active ? placeholder : placeholder}
          onChange={handleInputChange}
          onFocus={() => setInputActive(true)}
          onClick={() => setInputActive(true)}
          onBlur={handleBlurInput}
          ref={inputRef}
          name={name}
        />
      )}
    </InputContainer>
  )
}

export default Input
