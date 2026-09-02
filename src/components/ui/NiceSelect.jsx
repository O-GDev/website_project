import React from 'react'

export default function NiceSelect({ children, className, name }){
  // Render a native select styled, but with preserved structure
  return (
    <div className={"react-nice-select-wrapper " + (className||'')}>
      <select name={name} className={className}>
        {children}
      </select>
    </div>
  )
}
