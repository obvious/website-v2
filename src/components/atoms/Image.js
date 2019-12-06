import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SbEditable from "storyblok-react";

const ImageContainer = styled.div`
  img {
    min-height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Image = ({ url, ...otherProps }) => {
  const optimizedImageUrl = url.includes("/upload/")
    ? url.replace("/upload/", "/upload/q_auto/")
    : url;

  return (
    <SbEditable content={{ url, ...otherProps }}>
      <ImageContainer {...otherProps}>
        <img src={optimizedImageUrl} alt="" />
      </ImageContainer>
    </SbEditable>
  );
};

Image.propTypes = {
  url: PropTypes.string
};

export default Image;
