import React from "react";
import styled from "styled-components";
import Tag from "../atoms/Tag";
import Image from "../atoms/Image";
import { BodyText3 } from "../atoms/BodyText";
import {ClampLines} from "../../styled/mixins";

const NewsCardContainer = styled.li`
  all: unset;
  border: solid 2px ${props => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.spacings[4]};
  padding-top: ${props => props.theme.paddings[1]};
  
  
  width: ${props => props.theme.cardSizes.default.width};
  height: ${props => props.theme.cardSizes.default.height};
  max-width: ${props => props.theme.cardSizes.default.width};
  max-height: ${props => props.theme.cardSizes.default.height};

  .tag-group {
    padding: 0 ${props => props.theme.paddings[1]};
    display: flex;
    justify-content: space-between;
  }
  
  .tag {
    font-weight: 300;
    padding: 0;
  }

  .headline {
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes[8]};
    padding: ${props => props.theme.paddings[1]};
    ${ClampLines(2)};
  }

  .card-image {
    max-height: 240px;
    margin-top: auto;
    overflow: hidden;
  }
`;

export const NewsCard = props => (
  <NewsCardContainer>
    <div className="tag-group">
      <Tag type="news" className="tag">{props.context_setting_text}</Tag>
      <Tag type="news" className="tag">{props.date_published}</Tag>
    </div>
    <BodyText3 className="text headline" richText={props.name} />
    {props.feature_image && props.feature_image.length ? (
      <Image className="image card-image" url={props.feature_image}></Image>
    ) : null}
  </NewsCardContainer>
);
