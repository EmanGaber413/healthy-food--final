import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Helmet } from 'react-helmet'
import "@fontsource/emblema-one";



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>

   {/* <Helmet>
    <title>Healthy Food</title>
    <meta name="description" content="Helmet application"  />
    </Helmet> */}
   
  
    <App/>
  </BrowserRouter>
  </StrictMode>
 
)
