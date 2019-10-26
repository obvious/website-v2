import React from "react"
import {Helmet} from "react-helmet";
import styled from "styled-components";
import GlobalStyle from "../../styled/GlobalStyles";

import SFBlack from '../../../static/fonts/sf-ui-display-black.woff';
import SFBold from '../../../static/fonts/sf-ui-display-bold.woff';
import SFHeavy from '../../../static/fonts/sf-ui-display-heavy.woff';
import SFLight from '../../../static/fonts/sf-ui-display-light.woff';
import SFMedium from '../../../static/fonts/sf-ui-display-medium.woff';
import SFSemibold from '../../../static/fonts/sf-ui-display-semibold.woff';
import SFThin from '../../../static/fonts/sf-ui-display-thin.woff';
import SFUltralight from '../../../static/fonts/sf-ui-display-ultralight.woff';

const fonts = [
    SFBlack,
    SFBold,
    SFHeavy,
    SFLight,
    SFMedium,
    SFBold,
    SFSemibold,
    SFThin,
    SFUltralight
];

const LayoutContainer = styled.div``;

export default ({ children }) => (
    <LayoutContainer>
        <Helmet>
            {fonts.map(font => <link rel="preload"
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
)