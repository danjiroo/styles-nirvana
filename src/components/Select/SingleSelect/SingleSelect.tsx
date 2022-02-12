/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import Icon from '../../Icon'
import { SelectProps } from './types'

const SingleSelect: React.FC<SelectProps> = ({ ...props }: SelectProps) => {
  const {
    error,
    errorText,
    icon,
    id,
    name,
    isCreatable,
    isDisabled,
    isRequired,
    label,
    layout = 'default',
    selectOptions: options,
    onChange,
    placeholder,
    valueData = '',
    isMulti = false,
    ...restProps
  } = props

  const [value, setValue] = useState<any>(valueData)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    setValue(valueData)
  }, [valueData])

  const SelectComponent = (
    isCreatable ? Creatable : Select
  ) as React.ElementType

  const handleOnchange = (changes: any) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: changes?.value,
        },
      })
      return
    }

    setValue(changes)
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
    if (typeof e === 'string') {
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

  return (
    <StyledSelectContainer>
      {/* {!!icon && <Icon iconName={icon} color='dark' className='select-icon' />} */}

      <StyledField>
        {!!label && (
          <StyledLabel htmlFor={id}>
            {label} {!!isRequired && <span>*</span>}
          </StyledLabel>
        )}

        <SelectComponent
          {...restProps}
          id={id}
          selected
          isDisabled={isDisabled}
          isFocused
          isMulti={isMulti}
          value={valueFormatter}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          options={optionFormatter}
          onChange={handleOnchange}
        />

        {!!error && (
          <StyledError style={{ width: `calc(100% - ${icon && '28px'})` }}>
            {errorText}
          </StyledError>
        )}
      </StyledField>
    </StyledSelectContainer>
  )
}

export default SingleSelect

const StyledSelectContainer = styled.div`
  margin-top: 10px;
`

const StyledField = styled.div`
  position: relative;
  padding-left: ${({ icon }: any) => (icon ? 5 : 0)}px;
  width: 100%;
`

const StyledLabel = styled.label`
  transition: all 0.2s ease;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`

const StyledError = styled.span`
  color: ${({ theme }) => theme.colors.danger.DEFAULT};
  font-size: 12px;
`
