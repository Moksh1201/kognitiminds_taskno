import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'
import App from './App.jsx'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' 
  ? 'https://hostinger-internship-web-project.onrender.com' 
  : 'http://localhost:3001'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
