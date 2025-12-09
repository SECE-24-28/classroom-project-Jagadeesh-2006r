import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Display2 from './Display2.jsx'
import Display from './useeffect.jsx'
import Display5 from './display5.jsx'
import Display6 from './display6.jsx'
import Display7 from './display7.jsx'
import Display8 from './display8'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display2 />
    <Display5 />
    <Display6 />
    <Display7 />
    <Display8 />
        {/* <
          Display/> */}

  </StrictMode>,
)
