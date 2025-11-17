/**
 * Props for the custom TextField component.
 *
 * Includes selected MUI StandardTextFieldProps fields for input configuration.
 *
 * @property placeholder - Placeholder text for the input field.
 * @property defaultValue - Default value for the input field.
 * @property disabled - If true, disables the input field.
 * @property error - If true, marks the input field as having an error.
 * @property onChange - Change event handler for the input field.
 */
import { type StandardTextFieldProps } from "@mui/material";

type Props = Pick<StandardTextFieldProps, 'placeholder' | 'defaultValue' | 'disabled' | 'error' | 'onChange'>;

export type { Props };
