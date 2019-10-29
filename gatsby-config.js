/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-storyblok',
            options: {
                accessToken: 'JphGt7wK2Cs7YpdOGcEUNwtt',
                homeSlug: 'home',
                version: 'published'
            }
        },
        `gatsby-plugin-offline`
    ],
};
