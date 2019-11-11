import React from "react"
import styled from "styled-components";

import {HeaderText5} from "../atoms/HeaderText";
import BackgroundImage from "../atoms/BackgroundImage";

const ArticleCollectionFeaturedImageContainer = styled.div`
  padding: ${props => props.theme.paddings[4]} ${props => props.theme.paddings[2]} ${props => props.theme.paddings[2]};
  display: grid;
  border-radius: ${props => props.theme.borderRadii.small};
  box-shadow: ${props => props.theme.boxShadows.specialCard};
  margin: 0;
  position: relative;
  background: ${props => props.theme.colors.white};
  grid-gap: ${props => props.theme.paddings[1]};
  align-content: start;
  grid-template-rows: min-content 1fr;
  .featured-image {
    min-height: 30vh;
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
        <BackgroundImage className="featured-image" url={props.content.featuredImage}/>
    </ArticleCollectionFeaturedImageContainer>
);

export default ArticleCollectionFeaturedImage;