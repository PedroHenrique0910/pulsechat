import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../App.jsx'
import Login from './pages/Login/Login.jsx'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Chat from './pages/Chat/Chat.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
