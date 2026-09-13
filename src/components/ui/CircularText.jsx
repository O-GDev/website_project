import React, { useId } from 'react'

/**
 * React replacement for circleType circular text.
 * Renders the label on a partial circular arc (default 306° = dir 0.85,
 * matching the original template) and stretches it to fill the arc.
 */
export default function CircularText({
  children,
  className = 'curved-circle',
  radius = 77,
  fontSize = 14,
  dir = 0.85,
}) {
  const rawId = useId()
  const id = rawId.replace(/:/g, '')
  const text = String(children || '')
  const R = radius
  const size = Math.ceil(R * 2 + fontSize * 2.6)
  const cx = size / 2
  const cy = size / 2
  const arcDeg = dir * 360
  const steps = 64

  let d = ''
  for (let i = 0; i <= steps; i++) {
    const a = ((-90 + (arcDeg * i) / steps) * Math.PI) / 180
    const x = cx + R * Math.cos(a)
    const y = cy + R * Math.sin(a)
    d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2) + ' '
  }
  const textLength = (2 * Math.PI * R * arcDeg) / 360

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', overflow: 'visible' }}
    >
      <defs>
        <path id={id} d={d} fill="none" />
      </defs>
      <text
        fontSize={fontSize}
        fill="currentColor"
        textLength={textLength}
        lengthAdjust="spacingAndGlyphs"
      >
        <textPath href={`#${id}`} textAnchor="middle" startOffset="50%">{text}</textPath>
      </text>
    </svg>
  )
}