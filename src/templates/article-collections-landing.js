import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {prepareStoryblokGraphqlResponse, prepareArticlesFromMultipleCollections} from "../utils";

import PageHeader from "../components/templates/common/PageHeader";
import ArticleCollectionDetailedView from "../components/templates/articles/ArticleCollectionDetailedView";

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

	let articleCollectionsData = prepareStoryblokGraphqlResponse(articleCollectionsQueryResponse);
	const articleCollectionsDataGroupedByCollection = prepareArticlesFromMultipleCollections(articleCollectionsData);
	return (
		<div>
			<PageHeader title="Publications"/>
			{articleCollectionsDataGroupedByCollection.map(collection => <ArticleCollectionDetailedView key={collection.name} {...collection}/>)}
		</div>
	)
};


export default ArticleCollection;