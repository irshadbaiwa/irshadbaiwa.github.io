import React, { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

interface Props {
  children: React.ReactNode
  variant?: 'base' | 'sm' | 'md' | 'lg'
}

const VARIANTS: any = {
  base: 'text-base md:text-lg',
  sm: 'text-sm md:text-base',
  md: 'text-lg md:text-xl',
  lg: 'text-xl md:text-2xl',
}

const Text: React.FC<Props & ComponentProps<'p'>> = ({
  children,
  variant = 'base',
  className,
}) => {
  // text-[#637381]
  return (
    <p
      className={cn(VARIANTS[variant], 'font-medium text-gray-600', className)}
    >
      {children}
    </p>
  )
}

export default Text
