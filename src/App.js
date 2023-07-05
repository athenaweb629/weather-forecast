import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import "styles/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
function App() {
  return (
    // <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HelmetProvider>
          <Provider store={store}>
            <Router />
          </Provider>
        </HelmetProvider>
      </BrowserRouter>
    </ThemeProvider>
    // </ErrorBoundary>
  );
}

export default App;
