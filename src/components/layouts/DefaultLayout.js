import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styled/GlobalStyles";
import theme from "../../styled/theme";

const LayoutContainer = styled.div``;


const DefaultLayout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <LayoutContainer>
                <GlobalStyle/>
                {children}
            </LayoutContainer>
        </ThemeProvider>
    )
};

export default DefaultLayout;
