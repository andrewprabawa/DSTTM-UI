import type { IButtonProps } from "./Button.interfaces";
import { BaseButton } from "./Button.styles";

/**
 * Button component renders a styled MUI Button with a label.
 *
 * @param props - IButtonProps for the Button component
 * @param props.label - The text displayed inside the button.
 * @param props.color - The color of the button (primary, secondary, error).
 * @param props.variant - The variant of the button (contained, outlined).
 * @param props.disabled - If true, disables the button.
 * @param props.onClick - Click event handler for the button.
 * @returns A styled button element
 */
const Button = (props: IButtonProps) => (
  <BaseButton {...props}>{props.label}</BaseButton>
);

export { Button };