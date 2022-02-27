import { Theme } from './types';
interface StyledInputProps {
    theme?: Theme | null;
}
interface StyledInputProps {
    customTheme?: Theme;
}
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, StyledInputProps, never>;
interface TextAreaProps {
}
export declare const StyledTextArea: import("styled-components").StyledComponent<"textarea", any, TextAreaProps, never>;
interface LabelProps {
    is_input_active: boolean;
}
export declare const Label: import("styled-components").StyledComponent<"label", any, LabelProps, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
