import React from 'react'
import styled from "styled-components";

import ArticleCollectionFeaturedImage from "../../molecules/ArticleCollectionFeaturedImage";
import ArticleCollectionFeaturedArticle from "../../molecules/ArticleCollectionFeaturedArticle";
import ArticleCollectionArticleList from "../../molecules/ArticleCollectionArticleList";

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

const ArticleCollectionDetailedView = (props) => {
    return (
        <ArticleCollectionDetailedViewContainer {...props}>
            <ArticleCollectionFeaturedImage className="article-collection-featured-image" {...props}/>
            <ArticleCollectionFeaturedArticle className="article-collection-featured-article" {...props.articles[0]}/>
            <ArticleCollectionArticleList className="article-collection-featured-article" {...Object.assign({}, props, {articles:props.articles.slice(1, props.articles.length)})}/>
        </ArticleCollectionDetailedViewContainer>
    )
};

export default ArticleCollectionDetailedView;