import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initScrollReveal } from './lib/scrollReveal'

// Initialize small scroll reveal behaviour on first load
try {
  initScrollReveal();
} catch (e) {
  // ignore in non-browser environments
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
