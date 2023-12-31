import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import MainRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
