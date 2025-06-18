import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion, AnimatePresence } from 'motion/react'

import { cn } from '../../lib/utils'
import Text from '../typography/Text'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((state) => !state)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <div
        className={cn(
          'fixed z-50 top-4 left-0 right-0 flex items-center justify-center'
        )}
      >
        <motion.header
          className={cn(
            'max-w-full p-2 border border-gray-200 shadow-md overflow-hidden',
            'flex flex-row justify-between items-center gap-4',
            isOpen
              ? 'min-w-[20rem] lg:min-w-[24rem]'
              : 'min-w-[16rem] lg:min-w-[20rem]'
          )}
          layout
          transition={{ type: 'spring', bounce: 0.3 }}
          style={{ borderRadius: '100px' }}
        >
          <motion.div layout className="flex gap-2 items-center">
            {/* Image */}
            <StaticImage
              src="../../../images/baiwa.jpg"
              alt="Abubakar Baiwa | Frontend Engineer"
              className="rounded-full h-10 w-10 object-center object-cover"
            />
            <div className="-space-y-0.5 flex-1">
              <Text
                variant="sm"
                className="text-gray-800 font-semibold truncate"
              >
                A.I Baiwa
              </Text>
              <Text variant="xs" className="text-gray-500 truncate">
                Frontend Engr.
              </Text>
            </div>
          </motion.div>
          <motion.button
            onClick={toggleMenu}
            className={cn(
              'flex gap-1 items-center mx-3 shrink-0 relative h-4 w-4 overflow-hidden',
              'rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary2 focus-visible:ring-offset-2'
            )}
            layout
            transition={{ type: 'spring', bounce: 0.3 }}
          >
            <motion.span
              className={cn(
                'absolute left-0 right-0 h-0.5 w-full bg-gray-400 rounded',
                isOpen
                  ? 'rotate-45 top-1/2 -translate-y-1/2'
                  : 'top-1 translate-y-0 rotate-0'
              )}
              layout
            />
            <motion.span
              className={cn(
                'absolute left-0 right-0 h-0.5 w-full bg-gray-400 rounded',
                isOpen
                  ? '-rotate-45 top-1/2 -translate-y-1/2'
                  : 'bottom-1 translate-y-0 rotate-0'
              )}
              layout
            />
          </motion.button>
        </motion.header>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            layoutId="backdrop"
            className="fixed z-30 inset-0 backdrop-blur-3xl"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
