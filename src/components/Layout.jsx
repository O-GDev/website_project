import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TabsInit from './TabsInit'
import AccordionInit from './AccordionInit'
import NiceSelectInit from './NiceSelectInit'
import OdometerInit from './OdometerInit'
import ScrollToTop from './ui/ScrollToTop'
import Lightbox from './ui/Lightbox'

export default function Layout({ children }) {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Form guard: the legacy template forms pointed at .html pages, which do not
  // exist in this React app. Swallow those submissions so we never navigate away
  // or 404. (Contact forms are handled explicitly in Contact.jsx.)
  useEffect(() => {
    const onSubmit = (e) => {
      const form = e.target
      if (!form || form.tagName !== 'FORM') return
      const action = (form.getAttribute('action') || '').toLowerCase()
      if (action.endsWith('.html')) {
        e.preventDefault()
      }
    }
    document.addEventListener('submit', onSubmit)
    return () => document.removeEventListener('submit', onSubmit)
  }, [])

  return (
    <>
      <div className="boxed_wrapper">
        <Header />
        <main id="main-content">
          {children}
        </main>
        <TabsInit />
        <AccordionInit />
        <NiceSelectInit />
        <OdometerInit />
        <Footer />
        <Lightbox />
        <ScrollToTop />
      </div>
    </>
  )
}