import { CustomTheme } from './types';
interface StyledInputProps {
    customTheme?: CustomTheme;
}
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, StyledInputProps, never>;
export declare const StyledError: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const StyledTextArea: import("styled-components").StyledComponent<"textarea", any, StyledInputProps, never>;
interface LabelProps {
    is_input_active: boolean;
    type: 'text' | 'textArea' | 'textAreaMention' | string;
}
export declare const Label: import("styled-components").StyledComponent<"label", any, LabelProps, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledMentionsInput: import("styled-components").StyledComponent<import("react-mentions").MentionsInputClass, any, StyledInputProps, never>;
export {};
