import { GlobalColors, GlobalSizes } from '../';
import { IconNames } from '../Icon/IconList';
export interface handleChangeResponse {
    name: string;
    value: string | number | string[] | number[] | null;
    metadata?: Record<string, any>;
}
export interface OnChangeData {
    label: string;
    value: string | number;
    metadata?: Record<string, any>;
    optionAsObject?: boolean;
}
export interface OptionsProps {
    value: string;
    label: string;
    data?: any;
}
export interface OnChangeActionDef {
    action: string;
    name?: string;
    removedValues?: OnChangeData[];
}
export interface SelectProps extends GlobalColors, GlobalSizes {
    /**
     * Custom classname
     */
    className?: string;
    /**
     * Error fetching options
     */
    error?: boolean;
    /**
     * Text shown when error is true
     */
    errorText?: string;
    /**
     * Icon name
     */
    icon: IconNames | string;
    /**
     * Icon is inside the select component
     */
    innerIcon?: boolean;
    /**
     * Is selection option clearable?
     */
    isClearable?: boolean;
    /**
     * Enable creation of a non-existing item
     */
    isCreatable?: boolean;
    /**
     * Is required?
     */
    isRequired?: boolean;
    /**
     * Is disabled?
     */
    isDisabled?: boolean;
    /**
     * Is currently loading or fetching items?
     */
    isLoading?: boolean;
    /**
     * Upper text for the dropdown
     */
    label?: string;
    /**
     * Label with animation
     */
    animatedLabel?: boolean;
    /**
     * Placeholder text in input field
     */
    placeholder?: string;
    /**
     * Enable multi selection
     */
    isMulti?: boolean;
    /**
     * Enable border-radius
     */
    rounded?: boolean;
    /**
     * Selected option state key
     */
    name: string;
    /**
     * Array of options for the dropdown items
     */
    selectOptions: string[] | number[] | Record<string, any>[];
    /**
     * Array of options are objects instead of strings or numbers
     */
    selectOptionsAsObject?: {
        /**
         * This is required when your select options are of type object
         *
         * Example:
         *
         * const options = [
         *   {
         *     name: 'Jason',
         *     age: 29
         *   },
         *   {
         *     name: 'Heart',
         *     age: 11
         *   },
         * ]
         *
         * const labelKey = 'name'
         *
         * This 'name' key will be shown as an option for your select component
         */
        labelKey: string;
        /**
         * Same as labelKey, but valueKey is for the selected value instead as the display label only.
         *
         * Based from the example above:
         *
         * const valueKey = 'age'
         *
         * This 'age' key will be the selected value upon clicking an option.
         */
        valueKey: string;
    };
    /**
     * The onChange handler from the parent component
     */
    handleChange?: (data: handleChangeResponse) => void;
    /**
     * Selected option value
     */
    value?: string | Record<string, any>;
}
