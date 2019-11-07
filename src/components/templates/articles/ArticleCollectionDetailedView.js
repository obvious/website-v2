import React from 'react'
import styled from "styled-components";

import ArticleCollectionFeaturedImage from "../../molecules/ArticleCollectionFeaturedImage";
import ArticleCollectionFeaturedArticle from "../../molecules/ArticleCollectionFeaturedArticle";

const ArticleCollectionDetailedViewContainer = styled.section`
  display: grid;
  grid-template-columns: 3fr 4fr 4fr;
  margin-bottom: ${props => props.theme.spacings[1]};
  grid-gap: ${props => props.theme.spacings[2]};
`;

const ArticleCollectionDetailedView = (props) => {
    return (
        <ArticleCollectionDetailedViewContainer {...props}>
            <ArticleCollectionFeaturedImage className="article-collection-featured-image" {...props}/>
            <ArticleCollectionFeaturedArticle className="article-collection-featured-article" {...props.articles[0]}/>
        </ArticleCollectionDetailedViewContainer>
    )
};

export default ArticleCollectionDetailedView;