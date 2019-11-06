import React from "react";
import styled from "styled-components";

const CaptionText1Container = styled.figcaption`
  font-size: ${props => props.theme.fontSizes[6]};
  line-height: ${props => props.theme.lineHeights[6]};
  font-family: 'SF UI Display Bold';
`

export const CaptionText1 = ({children, ...otherProps}) => (
    <CaptionText1Container {...otherProps}>
        {children}
    </CaptionText1Container>
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
