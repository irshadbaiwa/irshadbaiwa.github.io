import React, { ComponentProps, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'motion/react'

const FadeIn: React.FC<
  ComponentProps<typeof motion.div> & {
    delay?: number
    offset?: number
    animateOnce?: boolean
    from?: 'top' | 'bottom' | 'left' | 'right'
    withBlur?: boolean
  }
> = ({
  className,
  delay = 0.2,
  offset = 8,
  animateOnce = true,
  from = 'bottom',
  withBlur = false,
  ...props
}) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: animateOnce })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!animateOnce) {
      controls.start('hidden')
    }
  }, [controls, inView, animateOnce])

  const POSITION = {
    top: { x: 0, y: -offset },
    bottom: { x: 0, y: offset },
    left: { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
  }

  const variants = {
    visible: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    hidden: {
      opacity: 0,
      filter: withBlur ? 'blur(4px)' : 'blur(0px)',
      ...POSITION[from],
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut', delay: delay }}
      className={className}
      {...props}
    />
  )
}

export default FadeIn
