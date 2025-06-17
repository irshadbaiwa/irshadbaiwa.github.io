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
        content="I'm a Frontend Engineer driven by a passion for building intuitive, scalable interfaces that deliver seamless experiences across web and mobile platforms."
      />
      <meta
        name="keywords"
        content="Front-End Engineer, Front-End Developer, Senior Front-End Developer, React Developer, Senior Developer, Nextjs Developer, React Native Developer, Mobile App Developer, Responsive Web Design, Mobile App Development, UI/UX Implementation, Scalable Web Solutions, Hire Front-End Developer, Front-End Engineering, Contractor for Web Development."
      />
      <meta name="author" content="Abubakar Baiwa" />
      <meta name="language" content="english" />
      <meta property="og:site_name" content="Abubakar Baiwa" />
      <meta property="og:title" content="Abubakar Baiwa" />
      <meta
        property="og:description"
        content="I build scalable and performant web and mobile apps with a focus on clean architecture, seamless user experience, and robust frontend engineering. Highly skilled in React, Nextjs, React Native, Typescript, Javascript, Python and SQL alongside other modern frameworks and libraries like Gatsby, Expo, Vue and Django."
      />
      <meta property="og:url" content="https://irshadbaiwa.github.io/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="../../images/meta-image.png" />
      <meta property="twitter:image" content="../../images/meta-image.png" />
      <meta property="twitter:site" content="@irshad_baiwa" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Abubakar Irshad Baiwa',
          jobTitle: 'Front-End Engineer',
          description:
            "I'm a Frontend Engineer driven by a passion for building intuitive, scalable interfaces that deliver seamless experiences across web and mobile platforms.",
          url: 'https://irshadbaiwa.github.io',
          sameAs: [
            'https://www.linkedin.com/in/abubakar-baiwa-9328a81b0',
            'https://github.com/irshadbaiwa',
            'https://x.com/irshad_baiwa',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Independent Contractor / Freelancer',
          },
          knowsAbout: [
            'React',
            'Nextjs',
            'React Native',
            'Responsive Web Design',
            'Expo',
            'Mobile App Development',
            'JavaScript',
            'TypeScript',
            'Python',
            'Front-End Engineering',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Business',
            email: 'irshaadbaiwa@gmail.com',
            url: 'https://irshadbaiwa.github.io',
          },
        })}
      </script>

      {children}
    </>
  )
}

export default SEO
