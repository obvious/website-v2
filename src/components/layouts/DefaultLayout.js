import React from "react"
import {Helmet} from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styled/GlobalStyles";
import theme from "../../styled/theme";

const fonts = [
    'fonts/sf-ui-display-black.woff',
    'fonts/sf-ui-display-bold.woff',
    'fonts/sf-ui-display-heavy.woff',
    'fonts/sf-ui-display-light.woff',
    'fonts/sf-ui-display-medium.woff',
    'fonts/sf-ui-display-semibold.woff',
    'fonts/sf-ui-display-thin.woff',
    'fonts/sf-ui-display-ultralight.woff'
];

const LayoutContainer = styled.div``;

export default ({ children }) => (
    <ThemeProvider theme={theme}>
        <LayoutContainer>
            <Helmet>
                {fonts.map(font =>
                    <link rel="preload"
                          as="font"
                          key={font}
                          href={font}
                          type="font/woff"
                          crossOrigin="anonymous" />
                )}
            </Helmet>
            <GlobalStyle/>
            {children}
        </LayoutContainer>
    </ThemeProvider>
)