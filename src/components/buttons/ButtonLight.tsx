import React from 'react'

interface Props {
  children?: React.ReactNode
  [x: string]: any
}

const ButtonLight: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="bg-light px-2 rounded-md h-10 grid place-items-center text-sm lg:text-base text-primary1 font-bold overflow-hidden"
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonLight
