/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react'
import { StyledInput, InputContainer, Label, TextArea } from './styles'
import { FormInputProps } from './types'

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
  } = props
  const [is_input_active, setInputActive] = useState(false)
  const [is_label_click, setLabelClick] = useState(false)

  const inputValueRef = useRef<string | null>()
  const handleInputChange = (event: any) => {
    const { value, name } = event.target
    console.log('value:', value)
    inputValueRef.current = value
    actions.handleChange?.({ value, name, accessor })
  }

  console.log('IAM BEING CALLED:', inputValueRef)
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

  return (
    <InputContainer>
      {label && (
        <Label is_input_active={is_input_active} onClick={handleLabelClick}>
          {label}
        </Label>
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
      {type && type === 'textarea' && (
        <TextArea
          value={value}
          placeholder={is_input_active ? placeholder : ''}
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
