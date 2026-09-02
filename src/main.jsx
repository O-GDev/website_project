import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './index.css'
// JS assets (jQuery, site scripts) are injected via index.html from /assets

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// After React renders, reinitialize template JS that expected static HTML
setTimeout(() => {
  if (window && typeof window.reinitFlexibank === 'function') {
    try { window.reinitFlexibank() } catch(e){ console.warn(e) }
  }
  // also trigger load in case some handlers depend on it
  try { window.dispatchEvent(new Event('load')) } catch(e){}
  // ensure hero at top after init
  try { window.scrollTo(0,0) } catch(e){}
}, 250)
