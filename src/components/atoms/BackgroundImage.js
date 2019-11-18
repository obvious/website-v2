import React from "react";
import styled, { css } from "styled-components";

const BackgroundImageContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  ${props =>
    props.isThumbnail &&
    css`
      :after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    `}
`;

const BackgroundImage = ({ url, ...otherProps }) => {
  const optimizedImageUrl = url.replace("/upload/", "/upload/q_auto/");
  return (
    <BackgroundImageContainer
      {...Object.assign({}, otherProps, { url: optimizedImageUrl })}
    />
  );
};

export default BackgroundImage;
