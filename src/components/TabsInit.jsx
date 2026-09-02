import React, { useEffect } from 'react'

export default function TabsInit(){
  useEffect(() => {
    const handlers = []

    function setupTabsWithin(root){
      const tabBtns = root.querySelectorAll('[data-tab]')
      if (!tabBtns.length) return

      tabBtns.forEach(btn => {
        const onClick = (e) => {
          e.preventDefault()
          const target = btn.getAttribute('data-tab')
          // deactivate siblings
          tabBtns.forEach(b => b.classList.remove('active-btn'))
          btn.classList.add('active-btn')
          // show/hide content panels
          const parent = root.closest('.tabs-box') || document
          parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active-tab'))
          try{
            const panel = parent.querySelector(target)
            if (panel) panel.classList.add('active-tab')
          }catch(e){/* ignore invalid selectors */}
        }
        btn.addEventListener('click', onClick)
        handlers.push({btn, onClick})
      })
    }

    // initial setup: find all tab containers
    document.querySelectorAll('.tabs-box, .tab-btns, .tabs-content').forEach(root => setupTabsWithin(root))

    return () => {
      handlers.forEach(({btn, onClick}) => btn.removeEventListener('click', onClick))
    }
  }, [])

  return null
}
