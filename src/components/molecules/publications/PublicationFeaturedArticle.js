import React from "react"
import styled from "styled-components";

import {HeaderText5} from "../../atoms/HeaderText";
import {BodyText5} from "../../atoms/BodyText";
import Tag from "../../atoms/Tag";
import Link from "../../atoms/Link";
import Image from "../../atoms/Image";

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
  
  a {
    margin-top: ${props => props.theme.paddings[1]};
    font-size: ${props => props.theme.fontSizes[7]};
    line-height: ${props => props.theme.lineHeights[7]};  
    align-self: end; 
  }
`;

const PublicationFeaturedArticle = (props) => (
    <ArticleCollectionFeaturedArticleContainer {...props}>
        <Tag text="Latest" type="latest" />
        <HeaderText5 className="title">{props.name}</HeaderText5>
        <div className="article-content">
            <Image isThumbnail className="featured-image" url={props.content.featuredImage}/>
            <BodyText5 className="caption" richText={props.content.caption}/>
        </div>
        <Link url={{url: `/${props.full_slug}`}}>{`Read Full Article →`}</Link>
    </ArticleCollectionFeaturedArticleContainer>
);

export default PublicationFeaturedArticle;