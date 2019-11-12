/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

var credentials = require("./credentials");

module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-storyblok',
            options: {
                accessToken: credentials.storyblokPublicKey,
                homeSlug: 'home',
                version: 'published',
                includeLinks: true,
                resolveRelations: ['article.publication', 'case-study.relatedArticles']
            }
        },
        `gatsby-plugin-offline`
    ],
};
