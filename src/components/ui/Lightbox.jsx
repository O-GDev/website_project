import React, { useCallback, useEffect, useState } from 'react'
import './Lightbox.css'

/**
 * React replacement for the Fancybox lightbox.
 * Any <a class="lightbox-image" data-fancybox="gallery"> is intercepted; images
 * sharing the same data-fancybox group become a navigable gallery.
 * Mounted once inside Layout.
 */
export default function Lightbox() {
  const [state, setState] = useState({ open: false, items: [], index: 0 })
  const { open, items, index } = state

  const openAt = useCallback((href, group, alt) => {
    let sources = []
    if (group) {
      // collect all gallery members sharing this group
      const gallery = Array.from(document.querySelectorAll(`a.lightbox-image[data-fancybox="${group}"]`))
      sources = gallery.map(a => ({
        src: a.getAttribute('href'),
        alt: (a.querySelector('img') && a.querySelector('img').alt) || '',
      }))
    }
    if (!sources.length) sources = [{ src: href, alt: alt || '' }]
    const idx = sources.findIndex(s => s.src === href)
    setState({ open: true, items: sources, index: idx === -1 ? 0 : idx })
  }, [])

  const close = useCallback(() => setState(s => ({ ...s, open: false })), [])

  const go = useCallback((dir) => {
    setState(s => {
      if (s.items.length <= 1) return s
      const next = (s.index + dir + s.items.length) % s.items.length
      return { ...s, index: next }
    })
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a.lightbox-image')
      if (!anchor) return
      e.preventDefault()
      const img = anchor.querySelector('img')
      openAt(anchor.getAttribute('href'), anchor.getAttribute('data-fancybox'), img && img.alt)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [openAt, close, go])

  if (!open) return null

  const current = items[Math.min(index, items.length - 1)]

  return (
    <div className="react-lightbox" onClick={close} role="dialog" aria-modal="true">
      <span className="rl-close" onClick={close} aria-label="Close">&times;</span>
      {items.length > 1 && (
        <button type="button" className="rl-prev" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous">&lsaquo;</button>
      )}
      <div className="rl-content" onClick={(e) => e.stopPropagation()}>
        <img loading="lazy" src={current.src} alt={current.alt || ''} />
        <div className="rl-caption">{current.src}</div>
      </div>
      {items.length > 1 && (
        <button type="button" className="rl-next" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next">&rsaquo;</button>
      )}
    </div>
  )
}