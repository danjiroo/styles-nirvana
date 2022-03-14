import React, { useState } from 'react'

import { Modifiers } from '../'

import { Input } from '../'
import { StyledForm } from './styles'
import { Button } from '../'
import { FormProps, ActionsProps, State } from './types'

const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, fields } = props

  const submitting = false

  const [state, setState] = useState<State>({})

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
    onSubmit && onSubmit(state)
  }

  return (
    <>
      <Modifiers />
      <StyledForm onSubmit={handleSubmit} className='styled-form'>
        {submitting && <p>just a moment</p>}
        {fields &&
          Object.entries(fields).map(([key, value], index: number) => (
            <Input
              key={`key--${index}`}
              value={state[key] ?? ''}
              type='text'
              placeholder={value.place_holder}
              label={value.label}
              actions={actionsProp ?? {}}
              name={value.name}
              accessor='value'
              disabled={submitting}
              iconLeft={value.icon ? value.icon : ''}
            />
          ))}
        <Button onClick={handleSubmit} label='Submit' />
      </StyledForm>
    </>
  )
}
export default React.memo(Form)
