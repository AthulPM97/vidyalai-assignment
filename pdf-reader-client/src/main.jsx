import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PdfProvider from "./store/pdf-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PdfProvider>
      <App />
    </PdfProvider>
  </React.StrictMode>
);
