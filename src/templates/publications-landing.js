import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {prepareStoryblokGraphqlResponse, prepareArticlesFromMultiplePublications} from "../utils";

import PageHeader from "../components/templates/common/PageHeader";
import PublicationDetailedView from "../components/templates/publications/PublicationDetailedView";

const PublicationLandingPage = () => {
	const publicationsQueryResponse = useStaticQuery(
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
							group_id
						}
					}
				}
			}
		`
	);

	let publicationsData = prepareStoryblokGraphqlResponse(publicationsQueryResponse);
	const publicationsDataGroupedByCollection = prepareArticlesFromMultiplePublications(publicationsData);
	return (
		<div>
			<PageHeader title="Publications"/>
			{publicationsDataGroupedByCollection.map(publication => <PublicationDetailedView key={publication.uuid} {...publication}/>)}
		</div>
	)
};


export default PublicationLandingPage;