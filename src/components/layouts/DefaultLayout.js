import React from "react"
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styled/GlobalStyles";
import theme from "../../styled/theme";
import Nav from "../templates/Nav";
import {graphql} from "gatsby";

const LayoutContainer = styled.div``;

const DefaultLayout = ({children, pageContext}) => {
    return (
        <ThemeProvider theme={theme}>
            <LayoutContainer>
                <GlobalStyle/>
                <Nav {...pageContext.navData}/>
                {children}
            </LayoutContainer>
        </ThemeProvider>
    )
};

export default DefaultLayout;