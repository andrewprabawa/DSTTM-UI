import { type ButtonProps } from "@mui/material";

/**
 * IButtonProps for the custom Button component.
 *
 * Includes selected MUI ButtonProps fields and a label for the button text.
 *
 * @property color - The color of the button (primary, secondary, error).
 * @property variant - The variant of the button (contained, outlined).
 * @property disabled - If true, disables the button.
 * @property onClick - Click event handler for the button.
 * @property label - The text displayed inside the button.
 */
type IButtonProps = Pick<ButtonProps, 'disabled' | 'onClick'> & {
  label: string;
  color: 'primary' | 'secondary' | 'error';
  variant: 'contained' | 'outlined';
};

export type { IButtonProps };
