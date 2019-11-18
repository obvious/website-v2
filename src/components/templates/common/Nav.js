import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { prepareStoryblokGraphqlResponse } from "../../../utils";
import NavItemsList from "../../molecules/NavItemList";

import { Link as GatsbyLink } from "gatsby";

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

const Nav = () => {
  const navQueryResponse = useStaticQuery(
    graphql`
      query {
        storyblokEntry(slug: { eq: "main-navigation" }) {
          content
        }
      }
    `
  );

  const navData = prepareStoryblokGraphqlResponse(navQueryResponse);

  return (
    <NavContainer>
      <div className="nav-inner">
        <GatsbyLink to="/" className="logo-container">
          <img src={navData.logo} alt={navData.alt} />
        </GatsbyLink>
        <NavItemsList {...navData} />
      </div>
    </NavContainer>
  );
};

export default Nav;
