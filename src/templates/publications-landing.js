
import React from 'react'
import {prepareArticlesFromMultiplePublications, dynamicSort} from "../utils";

import PageHeader from "../components/templates/common/PageHeader";
import DetailedView from "../components/templates/publications/DetailedView";

const PublicationLandingPage = ({data}) => {
	const articlesDataGroupedByPublications = prepareArticlesFromMultiplePublications(data.articles);
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
