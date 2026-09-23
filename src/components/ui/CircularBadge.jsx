import React, { useId } from 'react'
import './CircularBadge.css'

/**
 * Signature trust / certification badge (per Instruction file).
 *
 * Structure:
 *  - thin circular outline (gold or muted gray stroke)
 *  - descriptive text curved along the inside of the circle (uppercase, small, letterspaced)
 *  - small line-icon centered inside (bank/shield icon in gold)
 *  - bold short label below + smaller muted subtitle line
 *
 * Props:
 *  text      -> curved ring text (uppercased automatically)
 *  label     -> bold short label under the badge (e.g. "CBN REGULATED")
 *  subtitle  -> smaller muted subtitle line
 *  icon      -> optional <img loading="lazy"> src for the centered icon
 *  children  -> optional custom node rendered instead of the default bank line-icon
 *  size      -> outer badge diameter in px (default 170)
 *  color     -> ring/text color (default gold accent)
 */
export default function CircularBadge({
  text = '',
  label = '',
  subtitle = '',
  size = 170,
  color = 'var(--theme-color)',
  icon,
  className = '',
  children,
}) {
  const rawId = useId()
  const id = rawId.replace(/:/g, '')
  const cx = size / 2
  const cy = size / 2
  const ringOuterR = size / 2 - 3
  const textR = size / 2 - 14
  const arcDeg = 306
  const steps = 64

  let d = ''
  for (let i = 0; i <= steps; i++) {
    const a = ((-90 + (arcDeg * i) / steps) * Math.PI) / 180
    const x = cx + textR * Math.cos(a)
    const y = cy + textR * Math.sin(a)
    d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ',' + y.toFixed(2) + ' '
  }
  const textLength = (2 * Math.PI * textR * arcDeg) / 360

  return (
    <div className={`circular-badge ${className}`.trim()}>
      <div className="badge-ring" style={{ width: size, height: size }}>
        <svg
          className="badge-svg"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
        >
          <circle className="badge-circle" cx={cx} cy={cy} r={ringOuterR} stroke={color} strokeWidth={1.4} />
          <defs>
            <path id={id} d={d} />
          </defs>
          <text
            className="badge-ring-text"
            fill={color}
            fontSize={10.5}
            letterSpacing={1}
            textLength={textLength}
            lengthAdjust="spacingAndGlyphs"
          >
            <textPath href={`#${id}`} textAnchor="middle" startOffset="50%">
              {text}
            </textPath>
          </text>
        </svg>
        <div className="badge-icon" style={{ color }}>
          {children ||
            (icon ? (
              <img loading="lazy" src={icon} alt="" />
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 4l9 5.5" />
                <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8" />
                <path d="M3 20.5h18" />
              </svg>
            ))}
        </div>
      </div>
      {label ? <span className="badge-label">{label}</span> : null}
      {subtitle ? <span className="badge-subtitle">{subtitle}</span> : null}
    </div>
  )
}