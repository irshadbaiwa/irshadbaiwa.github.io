import * as React from 'react'
import { Link, HeadFC } from 'gatsby'

const NotFoundPage = () => {
  return (
    <main>
      <h1 className="font-bold text-center">Page not found</h1>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
