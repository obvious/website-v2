import React from "react";
import styled from "styled-components";

import Link from "../atoms/Link";
import SbEditable from "storyblok-react";

const LinkGroupContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  span {
    margin: 0 ${props => props.theme.paddings[4]};
  }
`;

const LinkGroup = ({ links, ...otherProps }) => (
  <SbEditable content={links}>
    <LinkGroupContainer {...otherProps}>
      {links.map((link, index) => (
        <li key={link._uid}>
          <Link {...link}>{link.displayText}</Link>
          {index <= links.length - 2 ? <span>•</span> : null}
        </li>
      ))}
    </LinkGroupContainer>
  </SbEditable>
);

export default LinkGroup;
