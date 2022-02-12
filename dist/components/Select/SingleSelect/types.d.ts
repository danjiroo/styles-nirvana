import { Props as ReactSelectProps } from 'react-select';
interface OptionsProps {
    value: string;
    label: string;
    data?: any;
}
declare enum LayoutEnum {
    'default' = 0,
    'box' = 1,
    'rounded' = 2
}
export interface SelectProps extends ReactSelectProps {
    className?: string;
    error?: boolean;
    errorText?: string;
    icon?: string;
    id: string;
    isCreatable?: boolean;
    isRequired?: boolean;
    label?: string;
    labelKey: string;
    layout?: keyof typeof LayoutEnum;
    placeholder?: string;
    valueKey: string;
    valueData: string | number | OptionsProps;
    selectOptions: any;
    onChange?: any;
    isMulti?: boolean;
}
export {};
