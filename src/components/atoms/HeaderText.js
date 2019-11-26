import React from "react";
import styled from "styled-components";

const HeaderText1Container = styled.h1`
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: ${props => props.theme.lineHeights[0]};
  font-weight: 700;
`;

export const HeaderText1 = ({ children }) => (
  <HeaderText1Container>{children}</HeaderText1Container>
);

const HeaderText2Container = styled.h2`
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: ${props => props.theme.lineHeights[2]};
  font-weight: 700;
`;

export const HeaderText2 = ({ children }) => (
  <HeaderText2Container>{children}</HeaderText2Container>
);

const HeaderText3Container = styled.h3`
  font-size: ${props => props.theme.fontSizes[3]};
  line-height: ${props => props.theme.lineHeights[3]};
  font-weight: 700;
`;

export const HeaderText3 = ({ children }) => (
  <HeaderText3Container>{children}</HeaderText3Container>
);

const HeaderText4Container = styled.h4`
  font-size: ${props => props.theme.fontSizes[4]};
  line-height: ${props => props.theme.lineHeights[4]};
  font-weight: 700;
`;

export const HeaderText4 = ({ children }) => (
  <HeaderText4Container>{children}</HeaderText4Container>
);

const HeaderText5Container = styled.h5`
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: ${props => props.theme.lineHeights[5]};
  font-weight: 700;
`;

export const HeaderText5 = ({ children }) => (
  <HeaderText5Container>{children}</HeaderText5Container>
);

const HeaderText6Container = styled.h6`
  font-size: ${props => props.theme.fontSizes[7]};
  line-height: ${props => props.theme.lineHeights[7]};
  font-weight: 700;
`;

export const HeaderText6 = ({ children }) => (
  <HeaderText6Container>{children}</HeaderText6Container>
);
