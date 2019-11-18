const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const CaseStudyPageTemplate = path.resolve("src/templates/case-study.js");
    const PublicationPageTemplate = path.resolve(
      "src/templates/publication.js"
    );
    const PublicationsLandingPagePageTemplate = path.resolve(
      "src/templates/publications-landing.js"
    );
    const PublicationArticlePageTemplate = path.resolve(
      "src/templates/article.js"
    );
    const IndexPageTemplate = path.resolve("src/templates/index.js");

    resolve(
      graphql(
        `
          {
            stories: allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  field_component
                  full_slug
                  content
                  parent_id
                  group_id
                  published_at
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const { stories } = result.data;
        const { edges } = stories;
        edges.forEach(entry => {
          const { full_slug } = entry.node;

          let pagePath = full_slug === "home" ? "" : `${full_slug}/`;

          let component = null;

          switch (full_slug.split("/")[0]) {
            case "home":
              component = IndexPageTemplate;
              break;
            case "case-studies":
              component = CaseStudyPageTemplate;
              break;
            case "publication":
              component = PublicationPageTemplate;
              break;
            case "article":
              component = PublicationArticlePageTemplate;
              break;
            case "publications":
              component = PublicationsLandingPagePageTemplate;
              break;
            default:
              return;
          }

          let data = Object.assign({}, entry.node, {
            content: JSON.parse(entry.node.content)
          });
          createPage({
            path: `/${pagePath}`,
            component: component,
            context: {
              data: full_slug === "home" ? edges : data
            }
          });
        });
      })
    );
  });
};
