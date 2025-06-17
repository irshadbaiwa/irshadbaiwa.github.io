import React from 'react'

const BlobGradient: React.FC = () => {
  return (
    <div
      className="w-60 h-60 lg:w-72 lg:h-72 rotate-45"
      style={{
        background: `linear-gradient(26.62deg, hsl(13deg 93% 66% / 89%) 20.64%, hsl(13deg 93% 66% / 15%) 49.82%),
      linear-gradient(56.79deg, hsl(281deg 74% 73%) 33.79%, hsl(281deg 74% 73% / 0%) 72.67%),
      linear-gradient(301.08deg, hsl(32deg 96% 67% / 96%) 20.42%, hsl(32deg 96% 78% / 0%) 60.38%),
      linear-gradient(141.57deg, hsl(204deg 80% 61% / 95%) 19.08%, hsl(204deg 80% 71% / 0%) 98.72%), hsl(217deg 100% 91%)`,
        backgroundBlendMode: `normal,normal,normal,normal,normal,normal`,
      }}
    />
  )
}

export default BlobGradient
