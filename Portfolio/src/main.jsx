import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./Components/Home/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>
);
