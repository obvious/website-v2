import React from "react"
import styled from "styled-components";
import {ClampLines} from "../../../styled/mixins";

import {HeaderText6} from "../../atoms/HeaderText";
import Tag from "../../atoms/Tag";

import {formatDate} from '../../../utils';
import BackgroundImage from "../../atoms/BackgroundImage";

import {Link as GatsbyLink} from "gatsby";

const ArticleListItemContainer = styled(GatsbyLink)`
  display: grid;
  text-decoration: none;
  grid-gap: ${props => props.theme.paddings[3]};
  grid-template-columns: minmax(80px, 2fr) 6fr;
  margin-top: 0;
  .title {
    color: ${props => props.theme.colors.lighterBlack};
    letter-spacing: 0.5px; // TODO - move to theme.js
    ${ClampLines(2)};
  }
  .tag {
    margin-top: ${props => props.theme.paddings[4]};
  }
  .featured-image {
    align-self: start;
    height: 100%;
  }
`;

const ArticleListItem = (props) => (
    <ArticleListItemContainer to={`/${props.full_slug}`} {...props}>
        <div>
            <BackgroundImage className="featured-image" url={props.content.featuredImage}/>
        </div>
        <div className="content-group">
            <HeaderText6 className="title">{props.name}</HeaderText6>
            <Tag text={formatDate(props.first_published_at)} />
        </div>

    </ArticleListItemContainer>
);

export default ArticleListItem;