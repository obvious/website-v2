import React from "react"
import styled from "styled-components";

const HeaderText1Container = styled.h1`
  font-size: ${props => props.theme.fontSizes[0]};
  line-height: ${props => props.theme.lineHeights[0]};
  font-family: 'SF UI Display Bold';
`;

export const HeaderText1 = ({children, ...otherProps}) => (
    <HeaderText1Container {...otherProps}>
        {children}
    </HeaderText1Container>
);

const HeaderText2Container = styled.h2`
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: ${props => props.theme.lineHeights[2]};
  font-family: 'SF UI Display Bold';
`;

export const HeaderText2 = ({children, ...otherProps}) => (
    <HeaderText2Container {...otherProps}>
        {children}
    </HeaderText2Container>
);

const HeaderText3Container = styled.h3`
  font-size: ${props => props.theme.fontSizes[3]};
  line-height: ${props => props.theme.lineHeights[3]};
  font-family: 'SF UI Display Bold';
`;

export const HeaderText3 = ({children, ...otherProps}) => (
    <HeaderText3Container {...otherProps}>
        {children}
    </HeaderText3Container>
);

const HeaderText4Container = styled.h4`
  font-size: ${props => props.theme.fontSizes[4]};
  line-height: ${props => props.theme.lineHeights[4]};
  font-family: 'SF UI Display Bold';
`;

export const HeaderText4 = ({children, ...otherProps}) => (
    <HeaderText4Container {...otherProps}>
        {children}
    </HeaderText4Container>
);

const HeaderText5Container = styled.h5`
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: ${props => props.theme.lineHeights[5]};
  font-family: 'SF UI Display Bold';
`;

export const HeaderText5 = ({children, ...otherProps}) => (
    <HeaderText5Container {...otherProps}>
        {children}
    </HeaderText5Container>
);