/* eslint-disable no-unused-vars */
export interface data {
  value: string
  name: string
  secondary_name?: string
  accessor?: string
}

export interface Theme {
  background_color?: string
  outline_color?: string
  border_radius?: string
}
export interface FormInputProps {
  /**
   * The actual value that will be stored inside a state
   */
  value?: string
  placeholder: string
  /**
   *Add a label for a more descriptive input
   */
  label?: string
  name: string
  accessor?: string
  actions: {
    handleChange?: (data: data) => void
  }
  type?: string
  disabled?: boolean
  field_type?: string
  /**
   *If you want to customize the input styles
   add values to these props:
    - background_color?: string;
    - outline_color?: string;
    - border_radius?: string;
   */
  customTheme?: Theme
}
