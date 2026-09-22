import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { bindTabs } from './tabsBinder'

export default function TabsInit(){
  const location = useLocation()

  useEffect(() => bindTabs(document), [location.pathname])

  return null
}
