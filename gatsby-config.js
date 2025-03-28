const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Luka Maglakelidze`,
    description: `A portfolio website of Luka Maglakelidze, a Solutions Delivery Lead and a QA Specialist.`,
    twitterUsername: `@s`,
    keywords: `Developer, Frontend Developer, React.js, TypeScript, JavaScript, Next.js, Gatsby.js`,
    author: `Luka Maglakelidze`,
    siteUrl: `https://www.achishengelia.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        root: path.join(__dirname, `src`),
        resolveModules: [path.join(__dirname, `libs`)],
        components: path.join(__dirname, `src`, `components`),
        constants: path.join(__dirname, `src`, `constants`),
        assets: path.join(__dirname, `src`, `assets`),
        hooks: path.join(__dirname, `src`, `hooks`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/media`
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          quality: 1,
          backgroundColor: `transparent`
        }
      }
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     custom: {
    //       families: ['Pescante', 'Paysage'],
    //       urls: ['/fonts/Pescante.woff2', '/fonts/Paysage.woff2']
    //     }
    //   }
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`
  ]
};
