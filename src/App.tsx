import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import FaqAccordionCard from "./Components/FaqAccordionCard";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 12,
    },
    h1: {
      fontSize: 36,
    },
    h2: {
      fontSize: 13,
    },
    fontFamily: "Kumbh Sans",
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid hsl(240, 5%, 91%)",
          "&.MuiPaper-rounded": {
            borderRadius: 0,
          },
          "&.MuiPaper-rounded::before": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0 1rem 0 0",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <FaqAccordionCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
