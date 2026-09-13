import React, { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isActive, setIsActive] = useState(false)
  const [dashOffset, setDashOffset] = useState(307.919)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollY > 50) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }

      if (docHeight > 0) {
        const total = 307.919
        const progress = total - (scrollY * total) / docHeight
        setDashOffset(Math.max(0, Math.min(total, progress)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`scroll-to-top ${isActive ? 'scroll-top-active' : ''}`}
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    >
      <div>
        <div className="scroll-top-inner">
          <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                strokeDasharray: '307.919, 307.919',
                strokeDashoffset: dashOffset,
                transition: 'stroke-dashoffset 10ms linear',
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
