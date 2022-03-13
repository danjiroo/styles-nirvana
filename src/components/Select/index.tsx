/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import cn from 'classnames'
import Select, { Theme, StylesConfig } from 'react-select'
import Creatable from 'react-select/creatable'

import { Icon } from '..'
import { ThemeDefinition } from '../../themes'
import { capFirstLetterForEachWord } from '../../utils'

import { OnChangeActionDef, OnChangeData, SelectProps } from './types'
import { StyledField, StyledSelectContainer } from './styles'

const SingleSelect: React.FC<SelectProps> = ({
  error,
  errorText,
  icon,
  name,
  isCreatable = false,
  isDisabled = false,
  isRequired = false,
  isLoading = false,
  label,
  selectOptions: options,
  handleChange,
  placeholder,
  isMulti,
  selectOptionsAsObject,
  rounded = false,
  color = 'primary',
  colorWeight = '200',
  size = 'xl',
  className,
  value: propsValue,
  ...restProps
}: SelectProps) => {
  const styleProps = {
    error,
    label,
    icon,
    size,
  }

  const { labelKey: optionLabel, valueKey: optionValue } =
    selectOptionsAsObject ?? {}

  const { colors } = useTheme() as ThemeDefinition

  // initial value (needs to be label and value)
  const [value, setValue] = useState<any>()
  const [focus, setFocus] = useState(false)

  const labelKey = optionLabel || 'label'
  const valueKey = optionValue || 'id'

  const SelectComponent = (
    isCreatable ? Creatable : Select
  ) as React.ElementType

  useEffect(
    () =>
      setValue({
        label:
          typeof propsValue === 'string'
            ? capFirstLetterForEachWord(propsValue)
            : propsValue,
        value: propsValue,
      }),
    [propsValue]
  )

  console.log('@value', value)

  const onChangeHandler = (changes: any, e: OnChangeActionDef) => {
    setValue(changes)

    if (!isMulti) {
      if (handleChange) {
        if (e.action === 'clear') {
          handleChange({
            name,
            value: e.removedValues?.some((r) => typeof r.value === 'number')
              ? 0
              : '',
          })
          return
        }
        handleChange({
          name,
          value: changes?.value ?? null,
        })
        return
      }
    } else {
      const multiData = {
        name,
        value: (changes as OnChangeData[])?.map((field) => field?.value) as any,
      }

      const hasMetadata = (changes as OnChangeData[])?.some(
        (field) => field?.metadata
      )

      if (handleChange) {
        handleChange(
          hasMetadata
            ? {
                ...(multiData ?? {}),
                metadata: (changes as OnChangeData[])?.map(
                  (field) => field?.metadata
                ),
              }
            : multiData
        )

        return
      }
    }
  }

  const optionFormatter = options.map((option) => {
    if (typeof option === 'string') {
      return {
        label: capFirstLetterForEachWord(option),
        value: option,
      }
    }

    if (typeof option === 'number') {
      return {
        label: option,
        value: option,
      }
    }

    return {
      label: capFirstLetterForEachWord(option[labelKey]),
      value: option[valueKey],
      metadata: option,
    }
  })

  const colorStyles: StylesConfig<any, true> = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      color: isDisabled
        ? colors.dark[50]
        : isSelected
        ? colors.light[100]
        : colors.dark[100],
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? colors?.[color][colorWeight]
        : undefined,

      ':active': {
        ...styles[':active'],
        color: isDisabled
          ? undefined
          : isSelected
          ? colors.light[100]
          : colors.light[100],
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? colors?.[color][colorWeight]
          : colors?.[color][colorWeight],
      },
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      ':hover': {
        backgroundColor: colors?.[color][colorWeight],
        color: 'white',
      },
    }),
    input: (styles) => ({
      ...styles,
      color: colors.dark[100],
    }),
    placeholder: (styles) => ({
      ...styles,
      color: colors.dark[100],
    }),
    singleValue: (styles) => ({
      ...styles,
      color: colors.dark[100],
    }),
    multiValue: (styles) => ({
      ...styles,
      color: colors.dark[100],
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: colors.dark[100],
    }),
  }

  return (
    <StyledSelectContainer {...styleProps} className={cn(className)}>
      {!!icon && (
        <div className='select-icon-container'>
          <Icon iconName={icon} color='dark' className='ICONN DEBUGGGG' />
        </div>
      )}

      <StyledField {...styleProps}>
        {!!label && (
          <label className='select-label'>
            {label} {!!isRequired && <span className='select-required'>*</span>}
          </label>
        )}

        <SelectComponent
          {...restProps}
          className='select-component'
          selected
          isDisabled={isDisabled}
          isLoading={isLoading}
          isFocused
          isMulti={isMulti}
          value={value}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          options={optionFormatter}
          onChange={onChangeHandler}
          styles={colorStyles}
          theme={(theme: Theme) => ({
            ...theme,
            borderRadius: rounded ? 8 : 0,
            colors: {
              ...theme.colors,
              primary25: colors?.[color][colorWeight],
              primary: colors?.[color][colorWeight],
            },
          })}
        />

        {!!error && (
          <span
            className='select-error'
            style={{ width: `calc(100% - ${icon && '28px'})` }}
          >
            {errorText}
          </span>
        )}
      </StyledField>
    </StyledSelectContainer>
  )
}

export default SingleSelect
