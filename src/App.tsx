import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 12,
    },
    fontFamily: "Kumbh Sans",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app"></div>
    </ThemeProvider>
  );
}

export default App;
