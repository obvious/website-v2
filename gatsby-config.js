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
                accessToken: 'StXtcN8NRmv5zl3qzv6QzAtt',
                homeSlug: 'home',
                version: 'published',
                includeLinks: true
            }
        },
        `gatsby-plugin-offline`
    ],
};
