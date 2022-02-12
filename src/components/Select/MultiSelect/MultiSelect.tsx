/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import Creatable from 'react-select/creatable'
import Icon from '../../Icon'
import { ISelectProps } from '../MultiSelect/types'

const MultiSelect: React.FC<ISelectProps> = ({ ...props }) => {
  const {
    error,
    errorText,
    icon,
    id,
    isCreatable,
    isRequired,
    isDisabled,
    label,
    layout = 'default',
    selectOptions: options,
    onChange,
    placeholder,
    valueData = [],
    ...restProps
  } = props

  const [values, setValues] = useState<any[]>(valueData)
  const [focus, setFocus] = useState(false)

  const SelectComponent = (
    isCreatable ? Creatable : Select
  ) as React.ElementType

  const handleOnchange = (val: any) => {
    // console.log({ val })
    if (onChange) {
      onChange(val, id)
      return
    }
    const newValues = val.map((e: any) => e.value)
    setValues(newValues)
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

  const valueFormatter = values.map((e: any) => ({
    value: e,
    label: getLabel(e),
  }))

  useEffect(() => {
    setValues(valueData || [])
  }, [valueData])

  return (
    <StyledSelectv2>
      {!!icon && (
        <div>
          <Icon iconName={icon} />
        </div>
      )}

      <div>
        <SelectComponent
          classNamePrefix='paradiseSelect'
          {...restProps}
          id={id}
          isFocused
          isMulti
          selected
          isDisabled={isDisabled}
          value={valueFormatter}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          options={optionFormatter}
          onChange={handleOnchange}
          // formatOptionLabel={formatOptionLabel}
        />

        {!!label && (
          <StyledLabel htmlFor={id}>
            {label} {!!isRequired && <span>*</span>}
          </StyledLabel>
        )}

        {layout === 'default' && <StyledHr />}
      </div>

      {!!error && (
        <span style={{ width: `calc(100% - ${icon && '28px'})` }}>
          {errorText}
        </span>
      )}
    </StyledSelectv2>
  )
}

export default MultiSelect

const StyledSelectv2 = styled.div``

const StyledLabel = styled.label`
  pointer-events: none;
  transition: all 0.2s ease;
`

const StyledHr = styled.hr`
  transition: all 0.2s ease;
`
