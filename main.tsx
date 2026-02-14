import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./src/App";
import ErrorBoundary from "./src/website/components/common/ErrorBoundary";
import { ThemeProvider, CssBaseline } from '@mui/material'
import ScrollToTop from "./src/website/components/common/ScrollToTop";
import { theme } from './src/theme'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
<React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>
</React.StrictMode>

);
