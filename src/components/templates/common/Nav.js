import React from "react";
import styled from "styled-components";

import NavItemsList from "../../molecules/NavItemList";

import {Link as GatsbyLink} from "gatsby";
import SbEditable from "storyblok-react";

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
      max-width: ${props => props.theme.containerSizes.small};
    }
    height: 100%;
    display: grid;
    align-items: center;
    margin: auto;
    grid-template-columns: 25% auto;
  }

  .logo-container {
    height: calc(${props => props.theme.navHeight} * 0.6);
    display: grid;
    img {
      height: 100%;
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.large}) {
    .logo-container {
      height: calc(${props => props.theme.navHeight} * 0.7);
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
    .nav-inner {
      ul {
        display: none;
      }
    }
  }
`;

const Nav = ({data}) => {
    return (
        <SbEditable content={data}>
            <NavContainer>
                <div className="nav-inner">
                    <GatsbyLink to="/" className="logo-container"><img src={data.logo} alt={data.alt}/></GatsbyLink>
                    <NavItemsList {...data}/>
                </div>
            </NavContainer>
        </SbEditable>
    )
};

export default Nav;
