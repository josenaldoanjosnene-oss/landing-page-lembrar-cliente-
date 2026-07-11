import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suporte } from "./Suporte";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suporte />
  </StrictMode>,
);
