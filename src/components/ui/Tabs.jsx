import React, { useEffect, useRef } from 'react'

export default function Tabs({ children, className }){
  const rootRef = useRef()

  useEffect(() => {
    const root = rootRef.current
    if(!root) return

    const tabBtns = Array.from(root.querySelectorAll('[data-tab]'))
    function activate(targetSelector, btn){
      tabBtns.forEach(b => b.classList.remove('active-btn'))
      if(btn) btn.classList.add('active-btn')
      const parent = root.closest('.tabs-box') || root
      parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active-tab'))
      try{
        const panel = parent.querySelector(targetSelector)
        if(panel) panel.classList.add('active-tab')
      }catch(e){}
    }

    tabBtns.forEach(btn => {
      const sel = btn.getAttribute('data-tab')
      const onClick = (e) => { e.preventDefault(); activate(sel, btn) }
      btn.addEventListener('click', onClick)
      // if initially active, ensure linked panel is shown
      if (btn.classList.contains('active-btn')) activate(sel, btn)
      // store handler for cleanup
      btn._tabsHandler = onClick
    })

    return () => {
      tabBtns.forEach(btn => { if(btn._tabsHandler) btn.removeEventListener('click', btn._tabsHandler) })
    }
  }, [])

  return (
    <div ref={rootRef} className={className || ''}>
      {children}
    </div>
  )
}
