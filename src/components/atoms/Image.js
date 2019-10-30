import React from "react"
import styled from "styled-components";

const ImageContainer = styled.img`
  width: 100%;
`;

const Image = ({url, ...otherProps}) => (
    <ImageContainer {...otherProps} src={url}/>
);

export default Image;