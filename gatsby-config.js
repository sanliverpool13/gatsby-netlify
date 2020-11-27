/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://strapi-setup-tutorial.uk.r.appspot.com"
          : `http://localhost:1337`,
        contentTypes: [`blogs`],
        queryLimit: 1000,
      },
    },
  ],
}
