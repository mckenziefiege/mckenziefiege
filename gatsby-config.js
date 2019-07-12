module.exports = {
  siteMetadata: {
    title: `McKenzie Fiege`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-less`,
    `gatsby-transformer-json`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         path: `${__dirname}/src/data`,
       },
     },
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM Serif Display`,
          `Lato`
          `Open Sans`
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }

  ],
}
