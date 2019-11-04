import React from 'react'
import styled from "styled-components";

import NavItem from "../atoms/NavItem";

const NavItemsListContainer = styled.ul`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`;

const NavItemsList = (props) => {
    return (
        <NavItemsListContainer>
            {props.navItems.map(navItem => <li key={navItem._uid}><NavItem {...navItem}/></li>)}
        </NavItemsListContainer>
    )
};

export default NavItemsList;