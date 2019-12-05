import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import SbEditable from "storyblok-react";

const LinkContainer = styled.div`
  color: ${props => props.theme.colors.blue};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ url, openInNewTab, children, ...otherProps }) => {
  // TODO - refactor url.url to only be url
  const isInternalLink = url.url.indexOf("http") !== 0;
  return (
    <SbEditable content={{ url, openInNewTab, children, ...otherProps }}>
      <LinkContainer
        {...otherProps}
        as={isInternalLink ? GatsbyLink : "a"}
        target={openInNewTab ? "_blank" : undefined}
        href={!isInternalLink ? url.url : undefined}
        to={isInternalLink ? url.url : undefined}
      >
        {children}
      </LinkContainer>
    </SbEditable>
  );
};

Link.propTypes = {
  url: PropTypes.string,
  openInNewTab: PropTypes.boolean
};

export default Link;
