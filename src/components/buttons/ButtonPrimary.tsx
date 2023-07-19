import React from 'react'

interface Props {
  children?: React.ReactNode
  [x: string]: any
}

const ButtonPrimary: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="bg-primary1 px-4 rounded-md h-10 grid place-items-center text-sm lg:text-base text-white font-bold overflow-hidden"
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary
