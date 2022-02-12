import { Props as SelectProps } from 'react-select';
interface IOptionsProps {
    value: string;
    label: string;
    data?: any;
}
declare enum LayoutEnum {
    'default' = 0,
    'box' = 1,
    'rounded' = 2
}
export interface ISelectProps extends SelectProps {
    className?: string;
    colspan?: string;
    error?: boolean;
    errorText?: string;
    icon?: string;
    id: string;
    isCreatable?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    label?: string;
    labelKey: string;
    layout?: keyof typeof LayoutEnum;
    placeholder: string;
    valueKey: string;
    valueData: string[] | number[] | IOptionsProps[];
    selectOptions: any;
    onChange?: any;
}
export {};
