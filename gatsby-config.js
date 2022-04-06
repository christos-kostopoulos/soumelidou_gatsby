module.exports = {
  siteMetadata: {
    title: `Ελένη Σουμελίδου`,
    description: `Ψυχολόγος MSc, Ψυχοδυναμική Ψυχοθεραπεύτρια Αναλύτρια Ομάδας, Ζεύγους & Οικογένειας`,
    author: `@gatsbyjs`,
    image: `/logo_background.jpg`,
    baseUrl: "https://elenisoumelidou.gr",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "roboto:300,400,500,700"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-223056340-1", // Google Analytics / GA
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
