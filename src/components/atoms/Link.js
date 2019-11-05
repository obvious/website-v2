import React from "react"
import styled from "styled-components";

const LinkContainer = styled.a`
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({url, displayText, openInNewTab}) => (
    <LinkContainer target={openInNewTab ? "_blank": undefined} href={url.url}>
        {displayText}
    </LinkContainer>
);

export default Link;