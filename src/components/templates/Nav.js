import React from 'react'
import styled from "styled-components";

import {HeaderText3} from "../atoms/HeaderText";

const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.theme.navHeight};
  background: ${props => props.theme.colors.black};
  .nav-inner {
    max-width: ${props => props.theme.containerSizes.default};
    @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
        max-width: ${props => props.theme.containerSizes.mobile};
    }
    height: 100%;
    display: grid;
    align-content: center;
    margin: auto;
  }
  .title {
    color: ${props => props.theme.colors.white};
  }
`;

const Nav = () => {
    return (
        <NavContainer>
            <div className="nav-inner">
                <HeaderText3 className='title'>Obvious</HeaderText3>

            </div>
        </NavContainer>
    )
};

export default Nav;