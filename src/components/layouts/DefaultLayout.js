import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styled/GlobalStyles";
import theme from "../../styled/theme";
import { Helmet } from "react-helmet";

const LayoutContainer = styled.div``;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Obvious</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <GlobalStyle />
          {children}
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
};

export default DefaultLayout;
