/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef, ChangeEvent } from 'react'
import { Mention } from 'react-mentions'
import { useTheme } from 'styled-components'

import {
  StyledInput,
  StyledTextArea,
  InputContainer,
  Label,
  StyledIcon,
  StyledMentionsInput,
} from './styles'
import { FormInputProps } from './types'
import { Icon } from '../'
import { ThemeDefinition } from '../../themes'
import Mentions from './Mentions'

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
    suggestions = [],
  } = props
  const [is_input_active, setInputActive] = useState(false)
  const [is_label_click, setLabelClick] = useState(false)

  const { colors } = useTheme() as ThemeDefinition

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
  const shouldDisplayPlaceHolder = () => {
    if (label && is_input_active) return placeholder
    if (!label && !is_input_active) return placeholder
    if (!label && is_input_active) return placeholder
    if (!is_input_active) return ''
  }
  return (
    <InputContainer>
      {label && (
        <Label
          is_input_active={is_input_active}
          onClick={handleLabelClick}
          type={type}
        >
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
          type={type}
          value={value}
          placeholder={shouldDisplayPlaceHolder()}
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
          placeholder={shouldDisplayPlaceHolder()}
          onChange={handleInputChange}
          onFocus={() => setInputActive(true)}
          onClick={() => setInputActive(true)}
          onBlur={handleBlurInput}
          ref={inputRef}
          name={name}
        />
      )}

      {type && type === 'textAreaMention' && (
        // <Mentions
        //   inputRef={inputRef}
        //   onChange={handleInputChange}
        //   onFocus={() => setInputActive(true)}
        //   onClick={() => setInputActive(true)}
        //   onBlur={handleBlurInput}
        //   value={value}
        // />
        <StyledMentionsInput
          value={value}
          name={name}
          placeholder={shouldDisplayPlaceHolder()}
          onChange={(e) =>
            handleInputChange({
              ...e,
              target: {
                ...e.target,
                name,
              },
            })
          }
          onFocus={() => setInputActive(true)}
          onClick={() => setInputActive(true)}
          onBlur={handleBlurInput}
          inputRef={inputRef}
          allowSpaceInQuery={true}
          allowSuggestionsAboveCursor={true}
        >
          <Mention
            trigger='@'
            data={suggestions}
            onAdd={(a) => console.log('Added suggestion', a)}
            appendSpaceOnAdd={true}
            displayTransform={(id, display) => `@${display}`}
            renderSuggestion={(
              entry,
              search,
              highlightedDisplay,
              index,
              focused
            ) => (
              <div
                className={`rendered-suggestion ${focused ? 'focused' : ''}`}
              >
                {highlightedDisplay}
              </div>
            )}
            style={{
              background: '#cee4e5',
            }}
          />
        </StyledMentionsInput>
      )}
    </InputContainer>
  )
}

export default Input
