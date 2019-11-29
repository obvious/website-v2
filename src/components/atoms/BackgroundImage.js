import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const BackgroundImageContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  //TODO: Make this a named prop
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
  const optimizedImageUrl = url.includes("/upload/")
    ? url.replace("/upload/", "/upload/q_auto/")
    : url;
  return (
    <BackgroundImageContainer
      {...Object.assign({}, otherProps, { url: optimizedImageUrl })}
    />
  );
};

BackgroundImage.propTypes = {
  url: PropTypes.string
};

export default BackgroundImage;
