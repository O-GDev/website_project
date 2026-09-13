import React, { useRef, useState, useEffect, useCallback } from 'react'

export default function Carousel({ children, className = '' }) {
  const slides = React.Children.toArray(children)
  const isBanner = className.includes('banner-carousel')
  const isSingle = className.includes('single-item-carousel')
  const isTwo = className.includes('two-item-carousel')
  const isThree = className.includes('three-item-carousel')
  const isFour = className.includes('four-item-carousel')
  const isSix = className.includes('six-item-carousel')

  const hideNav = className.includes('owl-nav-none')
  const hideDots = className.includes('owl-dots-none')

  // Responsive items count calculation
  const getResponsiveConfig = useCallback(() => {
    if (typeof window === 'undefined') return { items: 1, margin: 0 }
    const w = window.innerWidth
    if (isSix) {
      if (w >= 1200) return { items: 6, margin: 30 }
      if (w >= 800) return { items: 4, margin: 25 }
      if (w >= 600) return { items: 3, margin: 20 }
      if (w >= 480) return { items: 2, margin: 15 }
      return { items: 1, margin: 10 }
    }
    if (isFour) {
      if (w >= 1200) return { items: 4, margin: 30 }
      if (w >= 800) return { items: 3, margin: 25 }
      if (w >= 600) return { items: 2, margin: 20 }
      return { items: 1, margin: 10 }
    }
    if (isThree) {
      if (w >= 1200) return { items: 3, margin: 30 }
      if (w >= 600) return { items: 2, margin: 20 }
      return { items: 1, margin: 10 }
    }
    if (isTwo) {
      if (w >= 800) return { items: 2, margin: 30 }
      return { items: 1, margin: 15 }
    }
    return { items: 1, margin: 0 }
  }, [isSix, isFour, isThree, isTwo])

  const [{ items: visibleItems, margin }, setResponsive] = useState(() => getResponsiveConfig())
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Listen for resize to update visible items
  useEffect(() => {
    const handleResize = () => setResponsive(getResponsiveConfig())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getResponsiveConfig])

  const maxIndex = Math.max(0, slides.length - visibleItems)

  const next = useCallback(() => {
    setIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setIndex(prev => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Autoplay effect
  useEffect(() => {
    if (isPaused || slides.length <= visibleItems) return
    const delay = isBanner ? 6000 : (isSingle ? 4000 : 5000)
    const timer = setInterval(() => {
      next()
    }, delay)
    return () => clearInterval(timer)
  }, [isPaused, slides.length, visibleItems, isBanner, isSingle, next])

  // Swipe gesture support
  const touchStartX = useRef(0)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    else if (diff < -50) prev()
  }

  // Calculate dots
  const totalDots = Math.ceil(slides.length / visibleItems)

  return (
    <div
      className={`owl-carousel owl-theme ${className} owl-loaded owl-drag`}
      onMouseEnter={() => !isBanner && setIsPaused(true)}
      onMouseLeave={() => !isBanner && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ position: 'relative' }}
      data-react-carousel-init="true"
    >
      <div className="owl-stage-outer" style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          className="owl-stage"
          style={{
            display: 'flex',
            transition: 'transform 0.6s ease',
            transform: `translateX(-${(index * 100) / slides.length}%)`,
            width: `${(slides.length * 100) / visibleItems}%`,
          }}
        >
          {slides.map((slide, i) => {
            const isActive = i >= index && i < index + visibleItems
            return (
              <div
                key={i}
                className={`owl-item ${isActive ? 'active' : ''}`}
                style={{
                  flex: `0 0 ${100 / slides.length}%`,
                  maxWidth: `${100 / slides.length}%`,
                  paddingLeft: margin ? `${margin / 2}px` : undefined,
                  paddingRight: margin ? `${margin / 2}px` : undefined,
                  boxSizing: 'border-box',
                }}
              >
                {slide}
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      {!hideNav && slides.length > visibleItems && (
        <div className="owl-nav">
          <button type="button" className="owl-prev" onClick={prev}>
            <span className="flaticon-next"></span>
          </button>
          <button type="button" className="owl-next" onClick={next}>
            <span className="flaticon-next"></span>
          </button>
        </div>
      )}

      {/* Pagination Dots */}
      {!hideDots && totalDots > 1 && (
        <div className="owl-dots">
          {Array.from({ length: totalDots }).map((_, dotIdx) => {
            const isActive = Math.round(index / visibleItems) === dotIdx
            return (
              <button
                key={dotIdx}
                type="button"
                className={`owl-dot ${isActive ? 'active' : ''}`}
                onClick={() => setIndex(Math.min(dotIdx * visibleItems, maxIndex))}
              >
                <span></span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
