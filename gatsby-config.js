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
       resolve: `gatsby-plugin-manifest`,
       options: {
         name: `mckenziefiege`,
         short_name: `mckenziefiege`,
         start_url: `/`,
         background_color: `#FFFFFF`,
         theme_color: `#FFFFFF`,
         icon: `src/images/iconmonstr-laptop-4.svg`,
       },
     },
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `DM Serif Display`,
          `Open Sans`,
          `Karla`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    }

  ],
}
