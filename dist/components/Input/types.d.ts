import { SuggestionDataItem } from 'react-mentions';
import { GlobalProps } from '../';
export interface data {
    value: string;
    name: string;
    secondary_name?: string;
    accessor?: string;
}
export interface CustomTheme {
    background_color?: string;
    outline_color?: string;
    border_radius?: string;
    line_height?: string;
}
export interface FormInputProps extends GlobalProps {
    /**
     * The actual value that will be stored inside a state
     */
    value: string;
    placeholder: string;
    /**
     *Add a label for a more descriptive input
     */
    label?: string;
    name: string;
    accessor?: string;
    actions: {
        handleChange?: (data: data) => void;
    };
    type: 'text' | 'textArea' | 'textAreaMention' | string;
    disabled?: boolean;
    /**
     *If you want to customize the input styles
     add values to these props:
      - background_color?: string;
      - outline_color?: string;
      - border_radius?: string;
     */
    customTheme?: CustomTheme;
    iconLeft: string;
    icon?: string;
    /**
     * Mention options
     */
    suggestions?: SuggestionDataItem[];
}
