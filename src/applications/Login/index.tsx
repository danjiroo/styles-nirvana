import React from 'react'
import { Form } from '../../components'
import { fields } from './fields'

const Login: React.FC = () => {
  interface Data<T> {
    [key: string]: T
  }

  const onSubmit = <T,>(data: Data<T>) => {
    console.log('On Submit:', data)
  }
  return <Form title='LOGIN' onSubmit={onSubmit} fields={fields} />
}

export default Login
