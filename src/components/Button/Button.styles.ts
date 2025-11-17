
/**
 * BaseButton is a styled MUI Button component with custom color and variant styles.
 *
 * Styles are applied for both light and dark themes, supporting primary, secondary, and error colors.
 * @param color - Button color (primary, secondary, error)
 * @param variant - Button variant (contained, outlined)
 * @param theme - Theme object for applying dark mode styles
 */
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import type { Props } from "./Button.interfaces";

export const BaseButton = styled(Button)<Props>(
  ({ color, variant, theme }) => [
    {
        ...(variant === 'contained' && {
            ...(color === 'primary' && {
                color: "#FFFFFF",
                background: "#078480",
                "&:hover": {
                    background: "#00524F",
                },
                "&:focus": {
                    background: "#078480",
                },
                "&:disabled": {
                    color: "#8D949A",
                    background: "#F2F4F5",
                },
             }),
            ...(color === 'secondary' && {
                color: "#FFFFFF",
                background: "#505558",
                "&:hover": {
                    background: "#35383B",
                },
                "&:focus": {
                    background: "#505558",
                },
                "&:disabled": {
                    color: "#8D949A",
                    background: "#F2F4F5",
                },
             }),
            ...(color === 'error' && {
                color: "#FFFFFF",
                background: "#D63443",
                "&:hover": {
                    background: "#5F030C",
                },
                "&:focus": {
                    background: "#D63443",
                },
                "&:disabled": {
                    background: "#F2F4F5",
                },
             }),
        }),
        ...(variant === 'outlined' && {
            ...(color === 'primary' && {
                color: "#078480",
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
                    color: "#8D949A",
                    background: "#F2F4F5",
                    borderColor: "#F2F4F5",
                },
             }),
            ...(color === 'secondary' && {
                color: "#151617",
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
                    color: "#8D949A",
                    background: "#F2F4F5",
                    borderColor: "#F2F4F5",
                },
             }),
            ...(color === 'error' && {
                color: "#D63443",
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
                color: "#8D949A",
                    background: "#F2F4F5",
                    borderColor: "#F2F4F5",
                },
             }),
        }),
    },
    theme.applyStyles('dark', {
        ...(variant === 'contained' && {
            ...(color === 'primary' && {
                color: "#000000",
                background: "#70D2C8",
                "&:hover": {
                    background: "#ABE3DD",
                },
                "&:focus": {
                    background: "#70D2C8",
                },
                "&:disabled": {
                    color: "#9D9EAB",
                    background: "#41424D",
                },
            }),
            ...(color === 'secondary' && {
                color: "#000000",
                background: "#EDEEFC",
                "&:hover": {
                    background: "#F4F4FF",
                },
                "&:focus": {
                    background: "#EDEEFC",
                },
                "&:disabled": {
                    color: "#9D9EAB",
                    background: "#41424D",
                },
            }),
            ...(color === 'error' && {
                color: "#000000",
                background: "#F28F99",
                "&:hover": {
                    background: "#FFDBDF",
                },
                "&:focus": {
                    background: "#F28F99",
                },
                "&:disabled": {
                    background: "#41424D",
                },
            }),
        }),
        ...(variant === 'outlined' && {
            ...(color === 'primary' && {
                color: "#70D2C8",
                background: "#20212B",
                borderColor: "#747581",
                "&:hover": {
                    background: "#41424D",
                    borderColor: "#9D9EAB",
                },
                "&:focus": {
                    background: "#747581",
                    borderColor: "#747581",
                },
                "&:disabled": {
                    color: "#9D9EAB",
                    background: "#41424D",
                    borderColor: "#41424D",
                },
            }),
            ...(color === 'secondary' && {
                color: "#F28F99",
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
                    color: "#9D9EAB",
                    background: "#41424D",
                    borderColor: "#41424D",
                },
            }),
            ...(color === 'error' && {
                color: "#F28F99",
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
                    color: "#8D949A",
                    background: "#41424D",
                    borderColor: "#41424D",
                },
            }),
        }),
        }),
  ],
);

