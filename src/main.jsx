import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import DarkThemeToggler from './DarkThemeToggler.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <DarkThemeToggler />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
