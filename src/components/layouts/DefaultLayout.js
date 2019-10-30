import React from "react"
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styled/GlobalStyles";
import theme from "../../styled/theme";
import Nav from "../templates/Nav";

const LayoutContainer = styled.div``;

export default ({ children }) => (
    <ThemeProvider theme={theme}>
        <LayoutContainer>
            <GlobalStyle/>
            <Nav/>
            {children}
        </LayoutContainer>
    </ThemeProvider>
)