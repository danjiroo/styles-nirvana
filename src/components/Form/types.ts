export interface IFields {
  test: {
    label: string
    required: true
    place_holder: string
    name: string
    field_type?: 'text'
    icon: string
  }
}

export interface State {
  [key: string]: string
}

interface FieldValues {
  label: string
  required: boolean
  place_holder: string
  name: string
  field_type: string
  icon?: string
}

interface Fields {
  [key: string]: FieldValues
}

export interface FormProps {
  title?: string
  onSubmit?: (data: State) => void
  fields: Fields
}

export interface Data {
  name: string
  value: string
}

export interface ActionsProps {
  handleChange: (data: Data) => void
}
