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
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: credentials.storyBlokPreviewKey,
        homeSlug: "home",
        version: process.env.NODE_ENV === "production" ? "published" : "draft",
        includeLinks: true,
        resolveRelations: [
          "article.publication",
          "case-study.relatedArticles",
          "ArticlePicker.article",
          "CaseStudyPicker.case_study"
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
