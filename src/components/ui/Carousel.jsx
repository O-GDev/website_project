import React, { useRef, useState, useEffect } from 'react'

export default function Carousel({ children, className }){
  const containerRef = useRef()
  const [index, setIndex] = useState(0)

  const slides = React.Children.toArray(children)

  useEffect(() => {
    const el = containerRef.current
    if(!el) return
    el.style.display = 'flex'
    el.style.overflow = 'hidden'
    el.style.position = 'relative'

    Array.from(el.children).forEach(child => {
      child.style.flex = '0 0 100%'
      child.style.transition = 'transform 0.4s ease'
    })
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if(!el) return
    const width = el.clientWidth || el.offsetWidth
    Array.from(el.children).forEach((child, i) => {
      child.style.transform = `translateX(${(i - index) * 100}%)`
    })
  }, [index])

  function prev(){ setIndex(i => Math.max(0, i-1)) }
  function next(){ setIndex(i => Math.min(slides.length-1, i+1)) }

  // swipe
  useEffect(() => {
    const el = containerRef.current
    if(!el) return
    let startX = 0, isDown = false
    function onDown(e){ isDown = true; startX = e.touches ? e.touches[0].clientX : e.clientX }
    function onUp(e){ if(!isDown) return; isDown=false; const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX; const dx = endX - startX; if(dx>50) prev(); if(dx<-50) next() }
    el.addEventListener('mousedown', onDown); el.addEventListener('touchstart', onDown)
    el.addEventListener('mouseup', onUp); el.addEventListener('touchend', onUp)
    return () => {
      el.removeEventListener('mousedown', onDown); el.removeEventListener('touchstart', onDown)
      el.removeEventListener('mouseup', onUp); el.removeEventListener('touchend', onUp)
    }
  }, [slides.length])

  return (
    <div className={className || ''} style={{position:'relative'}}>
      <div ref={containerRef} className="react-carousel-container">
        {slides}
      </div>
      <button className="react-carousel-prev" onClick={prev} style={{position:'absolute',left:8,top:'50%',transform:'translateY(-50%)'}}>❮</button>
      <button className="react-carousel-next" onClick={next} style={{position:'absolute',right:8,top:'50%',transform:'translateY(-50%)'}}>❯</button>
    </div>
  )
}
