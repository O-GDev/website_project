import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function AccordionInit() {
  const location = useLocation()

  useEffect(() => {
    const handleAccClick = (e) => {
      const btn = e.target.closest('.acc-btn')
      if (!btn) return

      const box = btn.closest('.accordion-box') || btn.closest('.accordion-inner')
      if (!box) return

      e.preventDefault()

      const item = btn.closest('.accordion') || btn.closest('.block')
      if (!item) return

      const content = item.querySelector('.acc-content')
      const isCurrentlyActive = btn.classList.contains('active')

      // Close all siblings in the same accordion-box
      box.querySelectorAll('.accordion, .block').forEach(acc => {
        acc.classList.remove('active-block')
        const b = acc.querySelector('.acc-btn')
        if (b) b.classList.remove('active')
        const c = acc.querySelector('.acc-content')
        if (c) {
          c.classList.remove('current')
          c.style.display = 'none'
        }
      })

      // If clicked item was not previously active, expand it
      if (!isCurrentlyActive && content) {
        btn.classList.add('active')
        item.classList.add('active-block')
        content.classList.add('current')
        content.style.display = 'block'
      }
    }

    document.addEventListener('click', handleAccClick)
    return () => document.removeEventListener('click', handleAccClick)
  }, [location.pathname])

  return null
}
