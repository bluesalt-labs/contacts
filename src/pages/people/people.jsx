//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import PeopleApp from './PeopleApp'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <PeopleApp />
  </BrowserRouter>

)
