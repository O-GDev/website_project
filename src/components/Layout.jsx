import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
  const location = useLocation()

  useEffect(() => {
    // Run template re-init after navigation so jQuery plugins rebind
    try{
      if (window && typeof window.reinitFlexibank === 'function'){
        window.reinitFlexibank()
      }
      if (window && typeof window.headerStyle === 'function'){
        window.headerStyle()
      }
      window.scrollTo(0,0)
      // re-dispatch load for plugins that bind on load
      try{ window.dispatchEvent(new Event('load')) }catch(e){}
    }catch(e){ console.warn('Layout reinit failed', e) }
  }, [location.pathname])

  useEffect(() => {
    // Remove duplicate static template fragments that exist inside generated pages
    try{
      if (window && window.jQuery){
        const $ = window.jQuery
        // Keep first instance, remove others
        $('.main-header').slice(1).remove()
        $('.mobile-menu').slice(1).remove()
        $('.loader-wrap').slice(1).remove()
      } else {
        // fallback DOM-based removal
        const headers = document.querySelectorAll('.main-header')
        if (headers.length>1){ for(let i=1;i<headers.length;i++) headers[i].remove() }
        const mobiles = document.querySelectorAll('.mobile-menu')
        if (mobiles.length>1){ for(let i=1;i<mobiles.length;i++) mobiles[i].remove() }
        const loaders = document.querySelectorAll('.loader-wrap')
        if (loaders.length>1){ for(let i=1;i<loaders.length;i++) loaders[i].remove() }
      }
    }catch(e){console.warn('failed to clean duplicates', e)}
  }, [location.pathname])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
