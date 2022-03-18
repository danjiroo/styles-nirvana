/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react'
import { Mention } from 'react-mentions'
import { useTheme } from 'styled-components'
import { v4 } from 'uuid'

import {
  StyledInput,
  StyledTextArea,
  InputContainer,
  Label,
  StyledIcon,
  StyledMentionsInput,
  StyledError,
} from './styles'
import { FormInputProps } from './types'
import { Icon } from '../'
import { ThemeDefinition } from '../../themes'

import { IconNames } from '../Icon/IconList'

const Input: React.FC<FormInputProps> = (props) => {
  const {
    id = v4(),
    value = '',
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
    error = false,
    errorText = '',
    className,
  } = props
  const [is_input_active, setInputActive] = useState(false)
  const [is_label_click, setLabelClick] = useState(false)

  const { colors } = useTheme() as ThemeDefinition

  const handleInputChange = (event: any) => {
    const { value, name, targetValue } = event.target

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
              iconName={IconLeft as IconNames}
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
          className={className}
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
        <StyledMentionsInput
          name={name}
          value={value}
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
          spellCheck={false}
        >
          <Mention
            trigger='@'
            markup='@{{id:__id__}}:{{__display__}}'
            data={suggestions}
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
          <Mention
            trigger='#'
            markup='#[[id:__id__]]:[[__display__]]'
            data={suggestions}
            appendSpaceOnAdd={true}
            displayTransform={(id, display) => `#${display}`}
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

      {error && <StyledError>{errorText}</StyledError>}
    </InputContainer>
  )
}

export default Input
