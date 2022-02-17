/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import Select, { Theme, StylesConfig } from 'react-select'
import Creatable from 'react-select/creatable'

import { Icon } from '..'
import { ThemeDefinition } from '../../themes'

import { SelectProps } from './types'
import { StyledField, StyledSelectContainer } from './styles'

const SingleSelect: React.FC<SelectProps> = (props: SelectProps) => {
  const {
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
    valueData = '',
    isMulti = false,
    rounded = false,
    ...restProps
  } = props

  const { colors } = useTheme() as ThemeDefinition

  const [value, setValue] = useState<any>(valueData)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    setValue(valueData)
  }, [valueData])

  const SelectComponent = (
    isCreatable ? Creatable : Select
  ) as React.ElementType

  const handleOnchange = (changes: any) => {
    if (handleChange) {
      handleChange({
        target: {
          name,
          value: changes ?? '',
        },
      })
      return
    }

    setValue(changes.value)
  }

  const labelKey = props.labelKey || 'label'
  const valueKey = props.valueKey || 'id'

  const getLabel = (e: string | number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const label = options.find((r: any) => {
      if (typeof r === 'string') {
        return r === e
      }
      return e === r[valueKey]
    })

    if (label && typeof label === 'object') {
      return label[labelKey]
    } else if (label && typeof label === 'string') {
      return label
    }

    return e
  }

  const optionFormatter = options.map((e: any) => {
    if (typeof e === 'string' || typeof e === 'number') {
      return {
        label: e,
        value: e,
      }
    }

    return {
      label: e[labelKey],
      value: e[valueKey],
      data: e,
    }
  })

  const valueFormatter =
    value && (typeof value === 'string' || typeof value === 'number')
      ? {
          value,
          label: getLabel(value),
        }
      : value

  const colorStyles: StylesConfig<any, true> = {
    // multiValue: (styles) => ({
    //   ...styles,
    //   backgroundColor: colors.primary.light,
    // }),
    // multiValueLabel: (styles) => ({
    //   ...styles,
    //   color: colors.primary.dark,
    // }),
    multiValueRemove: (styles) => ({
      ...styles,
      ':hover': {
        backgroundColor: colors.primary.DEFAULT,
        color: 'white',
      },
    }),
  }

  return (
    <StyledSelectContainer {...props}>
      {!!icon && (
        <div className='select-icon-container'>
          <Icon iconName={icon} color='dark' />
        </div>
      )}

      <StyledField {...props}>
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
          value={valueFormatter}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          options={optionFormatter}
          onChange={handleOnchange}
          styles={colorStyles}
          theme={(theme: Theme) => ({
            ...theme,
            borderRadius: rounded ? 8 : 0,
            colors: {
              ...theme.colors,
              primary25: colors.primary.light,
              primary: colors.primary.DEFAULT,
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
