import React from "react";
import styled from "styled-components";

import { BodyText3 } from "../atoms/BodyText";
import { Link as GatsbyLink } from "gatsby";
import SbEditable from "storyblok-react";

const NavItemContainer = styled.a`
  color: ${props =>
    props.isHighlighted ? props.theme.colors.orange : props.theme.colors.white};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`;

const NavItem = props => {
  const isInternalLink = props.link.url.indexOf("http") !== 0;
  return (
    <SbEditable content={props}>
      <NavItemContainer
        theme={props.theme}
        as={isInternalLink ? GatsbyLink : "a"}
        target={props.openInNewTab ? "_blank" : undefined}
        href={!isInternalLink ? props.link.url : undefined}
        to={isInternalLink ? props.link.url : undefined}
      >
        <BodyText3 className="nav-item-text" richText={props.displayText} />
      </NavItemContainer>
    </SbEditable>
  );
};

export default NavItem;
