const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve("./src/templates/storyblok-entry.js");

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
                  is_startpage
                  parent_id
                  group_id
                  published_at
                  first_published_at
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

        const entries = result.data.stories.edges;
        const contents = entries.filter(entry => {
          return entry.node.field_component !== "MainNav";
        });

        contents.forEach(entry => {
          const pagePath =
            entry.node.full_slug === "home" ? "" : `${entry.node.full_slug}/`;
          const mainNavigation = entries.filter(globalEntry => {
            return globalEntry.node.field_component === "MainNav";
          });
          if (!mainNavigation.length) {
            throw new Error(
              "The global navigation item has not been found. Please create a content item with the content type MainNav in Storyblok."
            );
          }

          const story = { ...entry.node };

          /**
           * Custom entry on the home story
           */
          if (entry.node.full_slug === "home") {
            story.allStories = contents;
          }

          /**
           * Custom entry on the publications landing page story
           */
          if (entry.node.full_slug === "publications") {
            story.articles = contents.filter(
              item => item.node.field_component === "article"
            );
          }

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              mainNavigation: mainNavigation[0].node,
              story
            }
          });
        });
      })
    );
  });
};
