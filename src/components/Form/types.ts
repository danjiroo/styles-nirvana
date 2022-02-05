/* eslint-disable no-unused-vars */
export interface IFields {
  email: {
    label: string
    required: true
    place_holder: string
    name: string
    field_type?: 'text'
  }
  user_name: {
    label: string
    required: true
    place_holder: string
    name: string
    field_type: 'text'
  }
}

export interface FormProps {
  title: string
}

export interface Data {
  name: string
  value: string
}

export interface ActionsProps {
  handleChange: (data: Data) => void
}

export interface State {
  [key: string]: string
}
