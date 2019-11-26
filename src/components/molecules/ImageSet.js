import React from "react";
import styled from "styled-components";

import Image from "../atoms/Image";
import { BodyText3 } from "../atoms/BodyText";

const ImageSetContainer = styled.ul`
  display: grid;
  grid-gap: ${props => props.theme.spacings[4]};
  grid-template-areas:
    "a a b"
    "a a ."
    "a a c";

  .featured-image {
    grid-area: a;
    overflow: hidden;
  }
  .text {
    grid-area: b;
  }
  .other-image {
    grid-area: c;
    align-self: end;
    display: grid;
  }
`;

const ImageSet = props => (
  <ImageSetContainer>
    <Image className="featured-image" url={props.featuredImage} />
    <BodyText3 className="text" richText={props.caption[0].text} />
    <Image className="other-image" url={props.otherImages[0].image} />
  </ImageSetContainer>
);

export default ImageSet;
