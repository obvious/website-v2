import React from "react"
import styled from "styled-components";

import Link from "../atoms/Link";

const LinkGroupContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  span {
    margin: 0 0.5rem;
  }
`;

const LinkGroup = ({links, ...otherProps}) => (
    <LinkGroupContainer {...otherProps}>
        {links.map((link, index) => (
            <li key={link._uid}>
                <Link {...link} />
                {index<= links.length - 2 ? <span>•</span> : null}
            </li>
        ))}
    </LinkGroupContainer>
);

export default LinkGroup;