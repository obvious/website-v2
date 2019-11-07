import React from "react"
import styled from "styled-components";

import Image from "../atoms/Image";
import {HeaderText5} from "../atoms/HeaderText";
import {BodyText5} from "../atoms/BodyText";
import Tag from "../atoms/Tag";

const ArticleCollectionFeaturedArticleContainer = styled.div`
  display: grid;
  .text {
    font-family: 'SF UI Display Medium';
    color: ${props => props.theme.colors.lightBlack};
    letter-spacing: 1px;
    margin-top: ${props => props.theme.paddings[3]};
  }
  .featured-image {
    align-self: end;
    width: 30%;
    margin-top: ${props => props.theme.paddings[1]};
  }
`;

const ArticleCollectionFeaturedArticle = (props) => (
    <ArticleCollectionFeaturedArticleContainer {...props}>
        <Tag text="Latest" type="latest" />
        <HeaderText5 className="text">{props.name}</HeaderText5>
        <Image className="featured-image" url={props.content.featuredImage}/>
        <BodyText5 className="caption" richText={props.content.caption}/>
    </ArticleCollectionFeaturedArticleContainer>
);

export default ArticleCollectionFeaturedArticle;