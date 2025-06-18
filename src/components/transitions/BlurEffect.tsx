import React, { ComponentProps, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'motion/react'

const BlurEffect: React.FC<
  ComponentProps<typeof motion.div> & {
    delay?: number
    animateOnce?: boolean
    blurIntensity?: number
  }
> = ({
  className,
  delay = 0.2,
  animateOnce = true,
  blurIntensity = 4,
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

  const variants = {
    visible: { filter: 'blur(0px)' },
    hidden: {
      filter: `blur(${blurIntensity}px)`,
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

export default BlurEffect
