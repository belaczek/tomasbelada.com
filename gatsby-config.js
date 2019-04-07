module.exports = {
  siteMetadata: {
    title: `Tomas Belada`,
    description: `Homesite of Tomas Belada, the not very famous Javascript/Typescript engineer. At least so far...`,
    author: `Tomas Belada <tomas@belada.net>`,
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
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tomas Belada`,
        short_name: `tomasbelada.com`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
