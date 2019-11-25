import React from "react";
import styled from "styled-components";
import Tag from "../atoms/Tag";
import Image from "../atoms/Image";
import { BodyText3 } from "../atoms/BodyText";
import { MakeLinesClamp } from "../../styled/mixins";

const NewsCardContainer = styled.li`
  all: unset;
  border: solid ${props => props.theme.borderWidth.default}
    ${props => props.theme.colors.gray};
  display: flex;
  flex-direction: column;

  /* prettier-ignore */
  min-width: calc(25vw - ${props =>
    props.theme.spacings[4]}); //This displays 4 and a half cards
  @media (max-width: ${props => props.theme.breakpoints.medium}) {
    /* prettier-ignore */
    min-width: calc(38vw - ${props =>
      props.theme.spacings[4]}); //This displays 2 and a half cards
  }
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    /* prettier-ignore */
    min-width: calc(60vw - ${props =>
      props.theme.spacings[4]}); //This displays 1 and a half cards
  }


  padding-top: ${props => props.theme.paddings[1]};
  margin-right: ${props => props.theme.spacings[4]};
  &:last-child {
    margin-right: 0;
  }

  transition: transform 0.33s;
  &:hover {
    transform: scale(1.2);
  }

  .tag-group {
    padding: 0 ${props => props.theme.paddings[1]};
    display: flex;
    justify-content: space-between;
  }

  .tag {
    font-weight: 400;
    padding: 0;
  }

  .headline {
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes[8]};
    padding: ${props => props.theme.paddings[1]};
    ${MakeLinesClamp(2)};
  }

  .card-image {
    max-height: ${props => props.theme.cardSizes.imageHeight};
    margin-top: auto;
    overflow: hidden;
  }
`;

export const NewsCard = props => (
  <NewsCardContainer {...props}>
    <div className="tag-group">
      <Tag type="news" className="tag">
        {props.context_setting_text}
      </Tag>
      <Tag type="news" className="tag">
        {props.date_published}
      </Tag>
    </div>
    <BodyText3 className="headline" richText={props.name} />
    {props.feature_image && props.feature_image.length ? (
      <Image className="image card-image" url={props.feature_image} />
    ) : null}
  </NewsCardContainer>
);
