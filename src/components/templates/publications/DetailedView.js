import React from 'react'
import styled from "styled-components";

import FeaturedImage from "../../molecules/publications/FeaturedImage";
import FeaturedArticle from "../../molecules/publications/FeaturedArticle";
import ArticleList from "../../molecules/publications/ArticleList";

const DetailedViewContainer = styled.section`
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

const DetailedView = (props) => {
    return (
        <DetailedViewContainer {...props}>
            <FeaturedImage className="featured-image" {...props}/>
            <FeaturedArticle className="featured-article" {...props.articles[0]}/>
            <ArticleList className="featured-article" {...Object.assign({}, props, {articles:props.articles.slice(1, props.articles.length)})}/>
        </DetailedViewContainer>
    )
};

export default DetailedView;