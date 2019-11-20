import React from "react";
import styled from "styled-components";
import { MakeLinesClamp } from "../../../styled/mixins";

import { HeaderText6 } from "../../atoms/HeaderText";
import Tag from "../../atoms/Tag";

import { formatDate } from "../../../utils";

import { Link as GatsbyLink } from "gatsby";
import Image from "../../atoms/Image";

const ArticleListItemContainer = styled(GatsbyLink)`
  display: grid;
  text-decoration: none;
  grid-gap: ${props => props.theme.paddings[3]};
  grid-template-columns: minmax(80px, 2fr) 6fr;
  margin-top: 0;
  .title {
    color: ${props => props.theme.colors.lighterBlack};
    ${MakeLinesClamp(2)};
  }
  .tag {
    margin-top: ${props => props.theme.paddings[4]};
  }
  .featured-image-container {
    position: relative;
    overflow: hidden;
  }
  .featured-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-self: start;
  }
`;

const ArticleListItem = props => (
  <ArticleListItemContainer to={`/${props.full_slug}`} {...props}>
    <div className="featured-image-container">
      <Image className="featured-image" url={props.content.featuredImage} />
    </div>
    <div className="content-group">
      <HeaderText6 className="title">{props.name}</HeaderText6>
      <Tag>{formatDate(props.first_published_at)}</Tag>
    </div>
  </ArticleListItemContainer>
);

export default ArticleListItem;
