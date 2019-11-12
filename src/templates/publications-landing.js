import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {prepareStoryblokGraphqlResponse, prepareArticlesFromMultiplePublications, dynamicSort} from "../utils";

import PageHeader from "../components/templates/common/PageHeader";
import DetailedView from "../components/templates/publications/DetailedView";

const PublicationLandingPage = () => {
	const articlesQueryResponse = useStaticQuery(
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
							parent_id
							group_id,
							first_published_at
						}
					}
				}
			}
		`
	);

	let articlesData = prepareStoryblokGraphqlResponse(articlesQueryResponse);
	const articlesDataGroupedByPublications = prepareArticlesFromMultiplePublications(articlesData);
	return (
		<div>
			<PageHeader title="Publications"/>
			{articlesDataGroupedByPublications.map(publication => {
				publication.articles = publication.articles.sort(dynamicSort('-first_published_at'));
				return (<DetailedView key={publication.uuid} {...publication}/>);
			})}
		</div>
	)
};


export default PublicationLandingPage;