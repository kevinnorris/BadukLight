import React from 'react'

type Parameters = { isBlack: boolean }

const Stone = ({ isBlack }: Parameters): React.ReactElement => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    style={{ zIndex: 1 }}
  >
    <defs>
      <radialGradient id="gradientId" fx="0.75" fy="0.75">
        <stop offset="0%" stopColor={isBlack ? '#a0a0a0' : '#ffffff'} />
        <stop
          offset="100%"
          stopColor={isBlack ? '#000000' : '#a0a0a0'}
          stopOpacity={isBlack ? '0.9' : '1'}
        />
      </radialGradient>
    </defs>
    <circle
      cx="125"
      cy="125"
      r="125"
      fill="#ffffff"
      stroke="#000"
      strokeWidth="0"
    />
    <circle
      style={{ fillOpacity: 1, opacity: 1, strokeOpacity: 0.3 }}
      cx="125"
      cy="125"
      r="125"
      fill="url(#gradientId)"
      stroke="#000"
      fillOpacity="1"
      opacity="1"
      strokeOpacity="0.3"
      strokeWidth="1.1"
    />
  </svg>
)

export default Stone
