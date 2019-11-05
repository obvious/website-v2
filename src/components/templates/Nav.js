import React from 'react';
import styled from "styled-components";


import NavItemsList from "../molecules/NavItemList";

const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.theme.navHeight};
  background: ${props => props.theme.colors.black};
  .nav-inner {
    max-width: ${props => props.theme.containerSizes.default};
    @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
        max-width: ${props => props.theme.containerSizes.mobile};
    }
    height: 100%;
    display: grid;
    align-content: center;
    margin: auto;
    grid-template-columns: 35% auto;
  }
  
  .logo-container {
    height: calc(${props => props.theme.navHeight} * 0.6);
    display: grid;
    img {
      height: 100%;
    }
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
    .nav-inner {
      grid-template-columns: 30% auto;
    }
    .logo-container {
      height: calc(${props => props.theme.navHeight} * 0.7);
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
    .nav-inner {
      grid-template-columns: 50% auto;
      ul {
        display: none;
      }
    }
  }
`;

const Nav = (props) => {
    return (
        <NavContainer>
            <div className="nav-inner">
                <a href="/" className="logo-container"><img src={props.logo} alt=""/></a>
                <NavItemsList {...props}/>
            </div>
        </NavContainer>
    )
};

export default Nav;