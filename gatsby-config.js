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
        apiURL:
          process.env.NODE_ENV === "production"
            ? "https://strapi-setup-tutorial.uk.r.appspot.com"
            : `http://localhost:1337`,
        contentTypes: [`blogs`, `works`],
        queryLimit: 1000,
      },
    },
  ],
}
