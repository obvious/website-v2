import React from "react";
import styled from "styled-components";
import Tag from "../atoms/Tag";
import Image from "../atoms/Image";
import { BodyText3 } from "../atoms/BodyText";

const NewsCardContainer = styled.li``;

export const NewsCard = props => (
  <NewsCardContainer>
    <Tag>{props.context_setting_text}</Tag>
    <Tag>{props.date_published}</Tag>
    <BodyText3 className="text" richText={props.name} />
    {props.feature_image && props.feature_image.length ? (
      <Image className="image" url={props.feature_image}></Image>
    ) : null}
  </NewsCardContainer>
);
