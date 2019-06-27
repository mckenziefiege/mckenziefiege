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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`
      },
    },
    `gatsby-transformer-json`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         path: `${__dirname}/src/data`,
       },
     },
  ],
}
