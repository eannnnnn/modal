import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalContainer } from "./lib/modal/modal.container";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalContainer />
    <App />
  </React.StrictMode>
);
