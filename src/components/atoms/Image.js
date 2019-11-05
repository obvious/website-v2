import React from "react"
import styled from "styled-components";

const ImageContainer = styled.div`
  img {
    min-height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Image = ({url, ...otherProps}) => {
    const optimizedImageUrl = url.replace('/upload/', '/upload/q_auto/');
    return (<ImageContainer {...otherProps}>
        <img src={optimizedImageUrl} alt=""/>
    </ImageContainer>)
};

export default Image;