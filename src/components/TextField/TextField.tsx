import { BaseTextField } from "./TextField.styles";
import type { ITextFieldProps } from "./TextField.interfaces";

/**
 * TextField component renders a styled MUI TextField.
 *
 * @param props - ITextFieldProps for the TextField component
 * @param props.placeholder - Placeholder text for the input field.
 * @param props.defaultValue - Default value for the input field.
 * @param props.disabled - If true, disables the input field.
 * @param props.error - If true, marks the input field as having an error.
 * @param props.onChange - Change event handler for the input field.
 * @returns A styled text field element
 */
const TextField = (props: ITextFieldProps) => (
  <BaseTextField {...props} />
);

export { TextField };
