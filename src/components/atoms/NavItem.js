import React from 'react'
import styled from "styled-components";

import {BodyText3} from "../atoms/BodyText";

const NavItemContainer = styled.a`
  color: ${props => props.isHighlighted ? props.theme.colors.orange : props.theme.colors.white};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`;

const NavItem = (props) => {
    return (
        <NavItemContainer {...props} href={props.link.url} target={props.openInNewTab ? "_blank": ""}>
            <BodyText3 className='nav-item-text' richText={props.displayText}/>
        </NavItemContainer>
    )
};

export default NavItem;