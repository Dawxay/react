import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./style.css"
import { StrictMode } from "react";
import Btn from "./btn.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Btn />
  </StrictMode>,
)
