import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '../app.jsx'
import "../css/bootstrap.min.css"
import "../js/bootstrap.bundle.min.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
