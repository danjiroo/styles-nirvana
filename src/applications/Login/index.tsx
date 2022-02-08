import React from 'react'
import { Form } from '../../components'
import { fields } from './fields'
import { Container } from '../../components'

const Login = () => {
  interface Data<T> {
    [key: string]: T
  }

  const onSubmit = <T,>(data: Data<T>) => {
    console.log('DATA FROM FROM, READING FROM LOGIN COMPONENT', data)
  }
  return (
    <Container size='lg'>
      <Form title='LOGIN' onSubmit={onSubmit} fields={fields} />
    </Container>
  )
}

export default Login
