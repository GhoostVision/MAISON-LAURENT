import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/header'
import { Home } from '../pages/home.jsx'
import "../css/bootstrap.min.css"
import "../js/bootstrap.bundle.min.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header />
   <Home />
  </StrictMode>
)
