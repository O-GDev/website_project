import React, { useEffect } from 'react'

export default function CarouselInit(){
  useEffect(() => {
    const inits = []
    const carousels = Array.from(document.querySelectorAll('.owl-carousel') || [])
    carousels.forEach((el, idx) => {
      try {
        if (el.dataset.reactCarouselInit) return
        el.dataset.reactCarouselInit = '1'

        // basic scroll-snap carousel fallback for owl-carousel
        el.style.display = 'flex'
        el.style.overflowX = 'auto'
        el.style.scrollSnapType = 'x mandatory'
        el.style.WebkitOverflowScrolling = 'touch'
        el.style.scrollBehavior = 'smooth'

        const children = el.children ? Array.from(el.children) : []
        children.forEach(child => {
          try{ child.style.flex = '0 0 100%'; child.style.scrollSnapAlign = 'start' }catch(e){}
        })

      // add navigation UI
      const wrap = document.createElement('div')
      wrap.className = 'react-carousel-nav'
      wrap.style.position = 'relative'
      wrap.style.top = '0'

      const prev = document.createElement('button')
      prev.className = 'react-carousel-prev'
      prev.innerHTML = '&#10094;'
      const next = document.createElement('button')
      next.className = 'react-carousel-next'
      next.innerHTML = '&#10095;'

      // basic styles (kept inline so no css change required)
      [prev, next].forEach(btn => {
        btn.style.position = 'absolute'
        btn.style.top = '50%'
        btn.style.transform = 'translateY(-50%)'
        btn.style.zIndex = '30'
        btn.style.background = 'rgba(0,0,0,0.3)'
        btn.style.color = '#fff'
        btn.style.border = 'none'
        btn.style.padding = '8px 12px'
        btn.style.cursor = 'pointer'
      })
      prev.style.left = '8px'
      next.style.right = '8px'

      // attach handlers
      prev.addEventListener('click', () => {
        el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' })
      })
      next.addEventListener('click', () => {
        el.scrollBy({ left: el.clientWidth, behavior: 'smooth' })
      })

      // position nav relative to carousel container
      el.style.position = 'relative'
      el.appendChild(prev)
      el.appendChild(next)

      // simple swipe/drag support
      let isDown = false, startX, scrollLeft
      el.addEventListener('mousedown', (e) => {
        isDown = true
        el.classList.add('dragging')
        startX = e.pageX - el.offsetLeft
        scrollLeft = el.scrollLeft
      })
      el.addEventListener('mouseleave', () => { isDown = false; el.classList.remove('dragging') })
      el.addEventListener('mouseup', () => { isDown = false; el.classList.remove('dragging') })
      el.addEventListener('mousemove', (e) => {
        if(!isDown) return
        e.preventDefault()
        const x = e.pageX - el.offsetLeft
        const walk = (x - startX) * 1
        el.scrollLeft = scrollLeft - walk
      })

      inits.push(el)
      } catch(e){
        console.warn('CarouselInit element init failed', e)
      }
    })

    return () => {
      // cleanup nav buttons
      inits.forEach(el => {
        try{
          const nodes = Array.from(el.querySelectorAll('.react-carousel-prev, .react-carousel-next') || [])
          nodes.forEach(n => n.remove())
          delete el.dataset.reactCarouselInit
          el.style.overflowX = ''
          el.style.display = ''
          el.style.scrollSnapType = ''
        }catch(e){}
      })
    }
  }, [])

  return null
}
