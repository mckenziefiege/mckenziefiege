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
  ],
}
