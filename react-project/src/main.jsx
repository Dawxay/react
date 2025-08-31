import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./style.css"
import { StrictMode } from "react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h1 className="bg-amber-300 w-40 h-20">
      Something aaaaaa
    </h1>
  
  </StrictMode>,
)
