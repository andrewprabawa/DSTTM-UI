import { BaseTextField } from "./TextField.styles";
import type { Props } from "./TextField.interfaces";

/**
 * TextField component renders a styled MUI TextField.
 *
 * @param props - Props for the TextField component
 * @param props.placeholder - Placeholder text for the input field.
 * @param props.defaultValue - Default value for the input field.
 * @param props.disabled - If true, disables the input field.
 * @param props.error - If true, marks the input field as having an error.
 * @param props.onChange - Change event handler for the input field.
 * @returns A styled text field element
 */
const TextField = (props: Props) => (
  <BaseTextField {...props} />
);

export { TextField };
