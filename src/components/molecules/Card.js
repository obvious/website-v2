import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { MakeLinesClamp } from "../../styled/mixins";

import Image from "../atoms/Image";
import { BodyText3 } from "../atoms/BodyText";

const CardContentsContainer = styled.div`
  .text {
    ${MakeLinesClamp(2)};
    max-height: calc(
      2 * ${props => props.theme.lineHeights[5]}
    ); // This needs to be in relation to line-height of the text component, currently BodyText3
  }
  .image {
    margin-top: ${props => props.theme.spacings[3]};
  }
`;

const CardContents = props => (
  <CardContentsContainer {...props}>
    {props.caption && props.caption.length ? (
      <BodyText3 className="text" richText={props.caption} />
    ) : null}
    {props.featuredImage && (
      <Image className="image" url={props.featuredImage} />
    )}
  </CardContentsContainer>
);

const Card = props => {
  if (props.url && props.url.length) {
    /*
        Check if its an internal link
       */
    if (props.url.charAt(0) === "/") {
      return (
        <Link className="card" to={props.url}>
          <CardContents {...props} />
        </Link>
      );
    } else {
      return (
        <a
          className="card"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardContents {...props} />
        </a>
      );
    }
  } else return <CardContents className="card" {...props} />;
};

Card.propTypes = {
  caption: PropTypes.oneOfType(["string", "object"]),
  featuredImage: PropTypes.string,
  url: PropTypes.string
};

Card.defaultProps = {
  caption: null,
  featuredImage: null,
  url: null
};

export default Card;
