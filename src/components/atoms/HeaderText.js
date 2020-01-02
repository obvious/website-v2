import React from "react";
import styled from "styled-components";
import SbEditable from "storyblok-react";

const HeaderText1Container = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
  line-height: ${props => props.theme.lineHeights.h1};
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const HeaderText1 = ({ children, ...otherProps }) => (
  <SbEditable content={{ children, ...otherProps }}>
    <HeaderText1Container {...otherProps}>{children}</HeaderText1Container>
  </SbEditable>
);

const HeaderText2Container = styled.h2`
  font-size: ${props => props.theme.fontSizes.h2};
  line-height: ${props => props.theme.lineHeights.h2};
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const HeaderText2 = ({ children, ...otherProps }) => (
  <SbEditable content={{ children, ...otherProps }}>
    <HeaderText2Container {...otherProps}>{children}</HeaderText2Container>
  </SbEditable>
);

const HeaderText3Container = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  line-height: ${props => props.theme.lineHeights.h3};
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const HeaderText3 = ({ children, ...otherProps }) => (
  <SbEditable content={{ children, ...otherProps }}>
    <HeaderText3Container {...otherProps}>{children}</HeaderText3Container>
  </SbEditable>
);

const HeaderText4Container = styled.h4`
  font-size: ${props => props.theme.fontSizes.h4};
  line-height: ${props => props.theme.lineHeights.h4};
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const HeaderText4 = ({ children, ...otherProps }) => (
  <SbEditable content={{ children, ...otherProps }}>
    <HeaderText4Container {...otherProps}>{children}</HeaderText4Container>
  </SbEditable>
);

const HeaderText5Container = styled.h5`
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: ${props => props.theme.lineHeights[5]};
  font-weight: 700;
`;

export const HeaderText5 = ({ children, ...otherProps }) => (
  <SbEditable content={{ children, ...otherProps }}>
    <HeaderText5Container {...otherProps}>{children}</HeaderText5Container>
  </SbEditable>
);

const HeaderText6Container = styled.h6`
  font-size: ${props => props.theme.fontSizes[7]};
  line-height: ${props => props.theme.lineHeights[7]};
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HeaderText6 = ({ children, ...otherProps }) => (
  <SbEditable content={{ children, ...otherProps }}>
    <HeaderText6Container {...otherProps}>{children}</HeaderText6Container>
  </SbEditable>
);
