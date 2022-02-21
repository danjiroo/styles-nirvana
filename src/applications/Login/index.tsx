import React from 'react'
import { Form } from '../../components'
import { fields } from './fields'
import { Container } from '../../components'

const Login: React.FC = () => {
  interface Data<T> {
    [key: string]: T
  }

  const onSubmit = <T,>(data: Data<T>) => {
    console.log('On Submit:', data)
  }
  return (
    <Container size='lg'>
      <Form title='LOGIN' onSubmit={onSubmit} fields={fields} />
    </Container>
  )
}

export default Login
