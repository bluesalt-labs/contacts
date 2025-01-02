import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AboutApp from './AboutApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AboutApp />
  </StrictMode>,
)
