import React, { useEffect, useRef } from 'react'
import { bindTabs } from '../tabsBinder'

export default function Tabs({ children, className }){
  const rootRef = useRef()

  useEffect(() => bindTabs(rootRef.current), [])

  return (
    <div ref={rootRef} className={className || ''}>
      {children}
    </div>
  )
}
