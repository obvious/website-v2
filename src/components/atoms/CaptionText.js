import React from "react";
import styled from "styled-components";

const CaptionText2Container = styled.figcaption`
  font-size: ${props => props.theme.fontSizes[6]};
  line-height: ${props => props.theme.lineHeights[6]};
  font-family: 'SF UI Display Bold';
`

export const CaptionText2 = ({children, ...otherProps}) => (
    <CaptionText2Container {...otherProps}>
        {children}
    </CaptionText2Container>
)

const CaptionTextHighlightContainer = styled.figcaption`
  font-size: ${props => props.theme.fontSizes[6]};
  line-height: ${props => props.theme.lineHeights[6]};
  color: ${props => props.theme.colors.blue};
  font-family: 'SF UI Display Bold';
`

export const CaptionTextHighlight = ({children, ...otherProps}) => (
    <CaptionTextHighlightContainer {...otherProps}>
        {children}
    </CaptionTextHighlightContainer>
)
