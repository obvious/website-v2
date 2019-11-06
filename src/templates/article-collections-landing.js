import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {prepeareStoryblokGraphqlResponse} from "../../utils";


const ArticleCollection = () => {
    const articleCollectionsQueryResponse = useStaticQuery(
        graphql`
			query {
				allStoryblokEntry(filter: {full_slug: {regex: "/^article\\//"}}) {
					edges {
						node {
							id
							name
							created_at
							published_at
							uuid
							slug
							full_slug
							content
							is_startpage
							parent_id
							group_id
						}
					}
				}
			}
        `
    );

    const articleCollectionsData = prepeareStoryblokGraphqlResponse(articleCollectionsQueryResponse);
    return (
        <div>
            {JSON.stringify(articleCollectionsData)}
        </div>
    )
};


export default ArticleCollection;