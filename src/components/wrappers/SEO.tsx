import React from 'react'

interface Props {
  children?: React.ReactNode
}

const SEO: React.FC<Props> = ({ children }) => {
  return (
    <>
      <title>Abubakar Baiwa</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Passionate frontend developer, accomplished in designing, building and maintaining performant web and mobile apps. High skilled in HTML, CSS, Javascript, Python and SQL alongside modern frameworks and libraries like React, React-Native, Vue and Django."
      />
      <meta name="author" content="Abubakar Baiwa" />
      <meta name="language" content="english" />
      <meta property="og:site_name" content="Abubakar Baiwa" />
      <meta property="og:title" content="Abubakar Baiwa" />
      <meta
        property="og:description"
        content="Passionate frontend developer, accomplished in designing, building and maintaining performant web and mobile apps. High skilled in HTML, CSS, Javascript, Python and SQL alongside modern frameworks and libraries like React, React-Native, Vue and Django."
      />
      <meta property="og:url" content="https://irshadbaiwa.github.io/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="../../images/avatar1.jpg" />
      <meta property="twitter:image" content="../../images/avatar1.jpg" />
      <meta property="twitter:site" content="@irshad_baiwa" />
      {children}
    </>
  )
}

export default SEO
