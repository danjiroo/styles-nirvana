export interface OnChangeData {
    target: {
        name: string;
        value: string | number;
    };
}
export interface OptionsProps {
    value: string;
    label: string;
    data?: any;
}
export interface SelectProps {
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
    icon?: string;
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
     * Placeholder text in input field
     */
    placeholder?: string;
    /**
     * Array of options for the dropdown items
     */
    selectOptions: string[] | Record<string, any>[];
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
    labelKey?: string;
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
    /**
     * The onChange handler from the parent component
     */
    handleChange?: (data: OnChangeData) => void;
    /**
     * Selected option value
     */
    value?: string | Record<string, any>;
    /**
     * Selected option value (?)
     */
    valueData?: string | number | OptionsProps;
}
