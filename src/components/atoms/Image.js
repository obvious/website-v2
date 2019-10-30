import React from "react"
import styled from "styled-components";

const ImageContainer = styled.div`
  img {
    min-height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Image = ({url, ...otherProps}) => (
    <ImageContainer {...otherProps}>
        <img src={url} alt=""/>
    </ImageContainer>
);

export default Image;