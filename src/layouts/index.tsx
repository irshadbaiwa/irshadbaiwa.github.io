import React from 'react'

const Layout: React.FC = (props: any) => {
  return (
    <div>
      <title>Abubakar Baiwa</title>
      {props.children}
    </div>
  )
}

export default Layout
