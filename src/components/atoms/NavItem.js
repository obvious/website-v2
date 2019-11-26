import React from "react";
import styled from "styled-components";

import { BodyText3 } from "../atoms/BodyText";
import { Link as GatsbyLink } from "gatsby";

const NavItemContainer = styled.a`
  color: ${props =>
    props.isHighlighted ? props.theme.colors.orange : props.theme.colors.white};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`;

const NavItem = ({ link, openInNewTab, displayText }) => {
  const isInternalLink = link.url.indexOf("http") !== 0;

  return (
    <NavItemContainer
      as={isInternalLink ? GatsbyLink : "a"}
      target={openInNewTab ? "_blank" : undefined}
      href={!isInternalLink ? link.url : undefined}
      to={isInternalLink ? link.url : undefined}
    >
      <BodyText3 className="nav-item-text" richText={displayText} />
    </NavItemContainer>
  );
};

export default NavItem;
