import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#444444",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
        head: {
          backgroundColor: "#432818",
          color: "#ffffff",
          letterSpacing: "0.2em",
          fontWeight: "bold",
          minWidth: "75px",
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          textAlign: "center",
          backgroundColor: "#432818",
          color: "#ffffff",
          letterSpacing: "0.2em",
          "&.Mui-active": {
            color: "#ffe6a7",
            "& .MuiTableSortLabel-icon": {
              color: "#ffe6a7",
            },
          },
          "& .MuiTableSortLabel-icon": {
            opacity: "100",
          },
          "&:hover": {
            color: "#ffe6a7",
          },
        },
      },
    },
  },
});
