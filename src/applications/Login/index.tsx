/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Form } from '../../components'
import { fields } from './fields'

const Login: React.FC = () => {
  interface Data<T> {
    [key: string]: T
  }

  const onSubmit = <T,>(data: Data<T>) => {}

  return <Form title='LOGIN' onSubmit={onSubmit} fields={fields} />
}

export default Login
