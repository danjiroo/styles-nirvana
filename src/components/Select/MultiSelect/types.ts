import { Props as SelectProps } from 'react-select'

interface IOptionsProps {
  value: string
  label: string
  data?: any
}

enum LayoutEnum {
  'default',
  'box',
  'rounded',
}
export interface ISelectProps extends SelectProps {
  className?: string
  colspan?: string
  error?: boolean
  errorText?: string
  icon?: string
  id: string
  isCreatable?: boolean
  isRequired?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  label?: string
  labelKey: string
  layout?: keyof typeof LayoutEnum
  placeholder: string
  valueKey: string
  valueData: string[] | number[] | IOptionsProps[]
  selectOptions: any
  onChange?: any
}
