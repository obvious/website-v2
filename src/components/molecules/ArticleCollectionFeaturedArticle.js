import React from "react"
import styled from "styled-components";

import Image from "../atoms/Image";
import {HeaderText5} from "../atoms/HeaderText";
import {BodyText5} from "../atoms/BodyText";
import Tag from "../atoms/Tag";
import BackgroundImage from "../atoms/BackgroundImage";

const ArticleCollectionFeaturedArticleContainer = styled.div`
  display: grid;
  width: 100%;
  align-content: start;
  .title {
    font-family: 'SF UI Display Medium';
    color: ${props => props.theme.colors.lightBlack};
    letter-spacing: 1px;
    margin-top: ${props => props.theme.paddings[3]};
  }
  .article-content {
    grid-gap:${props => props.theme.paddings[3]};
    margin-top: ${props => props.theme.paddings[1]};
    .featured-image {
      float: left;
      width: 30%;
      margin: 0 ${props => props.theme.paddings[3]} 0 0;
    }
    .caption {
    }
  }
  
`;

const ArticleCollectionFeaturedArticle = (props) => (
    <ArticleCollectionFeaturedArticleContainer {...props}>
        <Tag text="Latest" type="latest" />
        <HeaderText5 className="title">{props.name}</HeaderText5>
        <div className="article-content">
            <BackgroundImage isThumbnail className="featured-image" url={props.content.featuredImage}/>
            <BodyText5 className="caption" richText={props.content.caption}/>
        </div>

    </ArticleCollectionFeaturedArticleContainer>
);

export default ArticleCollectionFeaturedArticle;