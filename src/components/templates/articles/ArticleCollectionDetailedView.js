import React from 'react'
import styled from "styled-components";

import ArticleCollectionFeaturedImage from "../../molecules/ArticleCollectionFeaturedImage";
import ArticleCollectionFeaturedArticle from "../../molecules/ArticleCollectionFeaturedArticle";

const ArticleCollectionDetailedViewContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(200px, 4fr) minmax(150px, 4fr) minmax(150px, 4fr);
  margin-bottom: ${props => props.theme.spacings[1]};
  grid-gap: ${props => props.theme.spacings[2]};
  align-content: space-around;
  
`;

const ArticleCollectionDetailedView = (props) => {
    return (
        <ArticleCollectionDetailedViewContainer {...props}>
            <ArticleCollectionFeaturedImage className="article-collection-featured-image" {...props}/>
            <ArticleCollectionFeaturedArticle className="article-collection-featured-article" {...props.articles[0]}/>
            <ArticleCollectionFeaturedArticle className="article-collection-featured-article" {...props.articles[0]}/>
        </ArticleCollectionDetailedViewContainer>
    )
};

export default ArticleCollectionDetailedView;