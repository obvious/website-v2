const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const CaseStudyStory = path.resolve('src/templates/case-study.js');
        const PublicationArticlesCollectionStory = path.resolve('src/templates/article-collection.js');
        const PublicationArticleStory = path.resolve('src/templates/article.js');
        const IndexStory = path.resolve('src/templates/index.js');

        resolve(
            graphql(
                `{
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
              }
            }
          }
        }`
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors)
                }
                const {stories} = result.data;
                const {edges} = stories;
                edges.forEach((entry) => {
                    const {full_slug} = entry.node;

                    let pagePath = full_slug === 'home' ? '' : `${full_slug}/`;

                    let component = null;

                    switch (full_slug.split('/')[0]) {
                        case 'home':
                            component = IndexStory;
                            break;
                        case 'case-studies':
                            component = CaseStudyStory;
                            break;
                        case 'article-collection':
                            component = PublicationArticlesCollectionStory;
                            break;
                        case 'article':
                            component = PublicationArticleStory;
                            break;
                    }

                    createPage({
                        path: `/${pagePath}`,
                        component: component,
                        context: {
                            data: JSON.parse(entry.node.content)
                        }
                    })
                })
            })
        )
    })
};