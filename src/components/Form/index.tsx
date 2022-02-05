import React, { useState } from 'react'

import { Modifiers } from '../'

import { fields } from './fields'

import { Input } from '../'
import { StyledForm, StyledFormWrapper } from './styles'
import { Button } from '../'
import { FormProps, ActionsProps, State } from './types'

const Form: React.FC<FormProps> = (props) => {
  const { title } = props
  const submitting = false

  const [state, setState] = useState<State>({
    name: '',
    value: '',
  })

  const actionsProp: ActionsProps = {
    handleChange: (data) => {
      const { name, value } = data
      setState((prev) => ({
        ...prev,
        [name]: value,
      }))
    },
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <>
      <Modifiers />
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormWrapper>
          {submitting ? (
            <>
              <p>just a moment</p>
            </>
          ) : (
            <h4 style={{ width: '100%', textAlign: 'center' }}>{title}</h4>
          )}
          {fields &&
            Object.entries(fields).map(([key, value], index: number) => (
              <Input
                key={`key--${index}`}
                value={state[key] ?? ''}
                type='text'
                field_type={value.field_type}
                placeholder={value.place_holder}
                label={value.label}
                actions={actionsProp ?? {}}
                name={value.name}
                accessor='value'
                disabled={submitting}
              />
            ))}
          <Button />
        </StyledFormWrapper>
      </StyledForm>
    </>
  )
}
export default React.memo(Form)
