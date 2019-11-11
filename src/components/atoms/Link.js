import React from "react"
import styled from "styled-components";
import {Link as GatsbyLink} from "gatsby";

const LinkContainer = styled.div`
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({url, displayText, openInNewTab}) => {
    // TODO - refactor url.url to only be url
    const isInternalLink = url.url.indexOf('http') !== 0;
    return (<LinkContainer
        as={isInternalLink ? GatsbyLink : 'a'}
        target={openInNewTab ? "_blank" : undefined}
        href={!isInternalLink ? url.url: undefined}
        to={isInternalLink ? url.url: undefined}>
        {displayText}
    </LinkContainer>)
};



export default Link;