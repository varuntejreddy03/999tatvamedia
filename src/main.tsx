import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

document.body.style.background = '#050505'
document.documentElement.style.background = '#050505'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
