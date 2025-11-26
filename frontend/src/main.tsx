import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTop from "./components/common/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Wrap the App in BrowserRouter */}
<ErrorBoundary>
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
</ErrorBoundary>
  </React.StrictMode>
);
