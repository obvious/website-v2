import React from "react"
import styled from "styled-components";

import {HeaderText6} from "../atoms/HeaderText";
import Tag from "../atoms/Tag";

import {formatDate} from '../../utils';
import BackgroundImage from "../atoms/BackgroundImage";

import {Link as GatsbyLink} from "gatsby";

const ArticleCollectionArticleListItemContainer = styled(GatsbyLink)`
  display: grid;
  text-decoration: none;
  grid-gap: ${props => props.theme.paddings[3]};
  grid-template-columns: 2fr 6fr;
  margin-top: 0;
  .title {
    color: ${props => props.theme.colors.lighterBlack};
    letter-spacing: 0.5px; // TODO - move to theme.js
  }
  .tag {
    margin-top: ${props => props.theme.paddings[5]};
  }
  .featured-image {
    align-self: start;
  }
`;

const ArticleCollectionArticleListItem = (props) => (
    <ArticleCollectionArticleListItemContainer to={`/${props.full_slug}`} {...props}>
        <BackgroundImage isThumbnail className="featured-image" url={props.content.featuredImage}/>
        <div className="content-group">
            <HeaderText6 className="title">{props.name}</HeaderText6>
            <Tag text={formatDate(props.published_at)} />
        </div>

    </ArticleCollectionArticleListItemContainer>
);

export default ArticleCollectionArticleListItem;