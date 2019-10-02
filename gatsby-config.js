module.exports = {
  siteMetadata: {
    title: `Food Cart/Restaurant Website UI`,
    description: `Gatsby/React project for professional portfolio`,
    author: `Joe Vaughn`,
    menuLinks:[
            {
               name:'home',
               link:'/'
            },
            {
               name:'menu',
               link:'/#menu'
            },
            {
              name:'reservations',
              link: '/form-page'
            },
            {
              name:'contact',
              link:'/contact'
            }
          ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
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
        name: `gatsby-restaurant-starter`,
        short_name: `food-site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/breakfast.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
