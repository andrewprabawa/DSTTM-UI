import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'Inter',
          fontWeight: 500,
          borderRadius: "4px",
          padding: "8px 12px",
          "&:focus": {
            boxShadow: `0px 0px 0px 3px #3ABCB7, 0px 0px 0px 1px #FFFFFF`,
          },
        },
        outlined: {
          borderWidth: "1px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          fontWeight: 400,
          minWidth: "516px",
          borderWidth: "1px",
          "&:focus": {
            boxShadow: `0px 0px 0px 3px #3ABCB7, 0px 0px 0px 1px #FFFFFF`,
          },
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'Inter',
          fontWeight: 500,
          borderRadius: "4px",
          padding: "8px 12px",
          "&:focus": {
            boxShadow: `0px 0px 0px 3px #778e8dff, 0px 0px 0px 1px #FFFFFF`,
          },
        },
        outlined: {
          borderWidth: "1px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          fontWeight: 400,
          minWidth: "516px",
          borderWidth: "1px",
          "&:focus": {
            boxShadow: `0px 0px 0px 3px #3ABCB7, 0px 0px 0px 1px #FFFFFF`,
          },
        },
      },
    },
  },
});
