import React from "react"
import styled from "styled-components";

import Image from "../atoms/Image";
import {HeaderText5} from "../atoms/HeaderText";

const ArticleCollectionFeaturedImageContainer = styled.div`
  padding: ${props => props.theme.paddings[4]} ${props => props.theme.paddings[2]} ${props => props.theme.paddings[2]};
  display: grid;
  border-radius: ${props => props.theme.borderRadii.small};
  box-shadow: ${props => props.theme.boxShadows.specialCard};
  margin: 0;
  position: relative;
  background: ${props => props.theme.colors.white};
  .featured-image {
    align-self: end;
    margin-top: ${props => props.theme.paddings[1]};
    img {
      height: 100%;
    }
  }
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    border-radius: ${props => props.theme.borderRadii.small};
    box-shadow: ${props => props.theme.boxShadows.specialCard};
    background: ${props => props.theme.backgrounds.cardShadow};
  }
  &:before {
    z-index: -1;
    left: ${props => props.theme.paddings[5]};
    right: -${props => props.theme.paddings[5]};
  }
  &:after {
    z-index: -2;
    left: ${props => props.theme.paddings[4]};
    right: -${props => props.theme.paddings[4]};
  }
`;

const ArticleCollectionFeaturedImage = (props) => (
    <ArticleCollectionFeaturedImageContainer {...props}>
        <HeaderText5 className="text">{props.name}</HeaderText5>
        <Image className="featured-image" url={props.content.featuredImage}/>
    </ArticleCollectionFeaturedImageContainer>
);

export default ArticleCollectionFeaturedImage;