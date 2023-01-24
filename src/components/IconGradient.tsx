import React from 'react'

interface Props {
  Icon?: React.FC<any>
}
const IconGradient: React.FC<Props> = ({ Icon }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#A663CC" />
        <stop offset="100%" stop-color="#9163CB" />
      </linearGradient>
    </defs>
    {Icon && <Icon fill="url(#gradient)" size={24} />}
  </svg>
)

export default IconGradient
