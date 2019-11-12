import React from 'react'
import styled from "styled-components";

import PublicationFeaturedImage from "../../molecules/publications/PublicationFeaturedImage";
import PublicationFeaturedArticle from "../../molecules/publications/PublicationFeaturedArticle";
import PublicationArticleList from "../../molecules/publications/PublicationArticleList";

const ArticleCollectionDetailedViewContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, auto);
  margin-bottom: ${props => props.theme.spacings[1]};
  grid-gap: ${props => props.theme.spacings[2]};
  @media screen and (min-width: ${props => props.theme.breakpoints.small}) {
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.large}) {
    grid-template-columns: 5fr 6fr 6fr;
  }
`;

const PublicationDetailedView = (props) => {
    return (
        <ArticleCollectionDetailedViewContainer {...props}>
            <PublicationFeaturedImage className="article-collection-featured-image" {...props}/>
            <PublicationFeaturedArticle className="article-collection-featured-article" {...props.articles[0]}/>
            <PublicationArticleList className="article-collection-featured-article" {...Object.assign({}, props, {articles:props.articles.slice(1, props.articles.length)})}/>
        </ArticleCollectionDetailedViewContainer>
    )
};

export default PublicationDetailedView;