
/**
 * BaseTextField is a styled MUI TextField component with custom styles for light and dark themes.
 *
 * Styles are applied for placeholder, error, disabled, and focus states.
 * @param theme - Theme object for applying dark mode styles
 */
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import type { Props } from "./TextField.interfaces";

export const BaseTextField = styled(TextField)<Props>(
  ({ theme }) => [
    {
      background: "#FBFBFC",
      borderColor: "#DBDEE1",
      "&:hover": {
        background: "#E8EAEC",
        borderColor: "#ADB2B7",
      },
      "&:focus": {
        background: "#FBFBFC",
        borderColor: "#DBDEE1",
      },
      "&:disabled": {
        background: "#F2F4F5",
        borderWidth: "none",
      },
      "&:error": {
        background: "#FFF0F1",
        borderColor: "#E4626F",
      },
    },
    theme.applyStyles("dark", {
      background: "#20212B",
      borderColor: "#747581",
      "&:hover": {
        background: "#41424D",
        borderColor: "#9D9EAB",
      },
      "&:focus": {
        background: "#20212B",
        borderColor: "#747581",
      },
      "&:disabled": {
        background: "#41424D",
        borderWidth: "none",
      },
      "&:error": {
        background: "#20212B",
        borderColor: "#F28F99",
      },
    }),
  ],
);
