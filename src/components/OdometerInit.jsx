import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function OdometerInit() {
  const location = useLocation()

  useEffect(() => {
    const odometers = document.querySelectorAll('.odometer')
    if (!odometers.length) return

    if (!('IntersectionObserver' in window)) {
      odometers.forEach(el => {
        const count = el.getAttribute('data-count')
        if (count) el.textContent = count
      })
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = el.getAttribute('data-count')
          if (target) {
            const isFloat = target.includes('.')
            const targetVal = parseFloat(target)
            if (isNaN(targetVal)) {
              el.textContent = target
            } else {
              const duration = 1200
              const startTime = performance.now()

              const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime
                const progress = Math.min(elapsed / duration, 1)
                // easeOutQuad easing
                const current = progress * (2 - progress) * targetVal
                el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toString()
                if (progress < 1) {
                  requestAnimationFrame(updateCount)
                } else {
                  el.textContent = target
                }
              }
              requestAnimationFrame(updateCount)
            }
          }
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.15 })

    odometers.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  return null
}
