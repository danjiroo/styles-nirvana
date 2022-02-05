/* eslint-disable no-unused-vars */
export interface IFields {
  email: {
    label: string
    required: true
    place_holder: string
    name: string
    field_type?: 'text'
  }
  username: {
    label: string
    required: true
    place_holder: string
    name: string
    field_type: 'text'
  }
  family_name: {
    label: string
    required: boolean
    place_holder: string
    name: string
    field_type: string
  }
}

export interface State {
  [key: string]: string
}

export interface FormProps {
  title: string
  onSubmit?: (data: State) => void
}

export interface Data {
  name: string
  value: string
}

export interface ActionsProps {
  handleChange: (data: Data) => void
}
