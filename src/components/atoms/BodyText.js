import React from "react";
import styled from "styled-components";

const StoryblokClient = require('storyblok-js-client');
const credentials = require('../../../credentials.json');

let Storyblok = new StoryblokClient({
    accessToken: credentials.storyblokPublicKey
});

const BodyText1Container = styled.p`
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: ${props => props.theme.lineHeights[1]};
  font-family: 'SF UI Display Medium';
`;

export const BodyText1 = ({richText, ...otherProps}) => (
    <BodyText1Container {...otherProps} dangerouslySetInnerHTML={{__html: typeof richText === 'object' ? Storyblok.richTextResolver.render(richText) : richText}}/>
);

const BodyText2Container = styled.p`
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: ${props => props.theme.lineHeights[2]};
  font-family: 'SF UI Display Medium';
`;

export const BodyText2 = ({richText, ...otherProps}) => (
    <BodyText2Container {...otherProps} dangerouslySetInnerHTML={{__html: typeof richText === 'object' ? Storyblok.richTextResolver.render(richText) : richText}}/>
);

const BodyText3Container = styled.p`
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: ${props => props.theme.lineHeights[5]};
  font-family: 'SF UI Display Medium';
`;

export const BodyText3 = ({richText, ...otherProps}) => (
    <BodyText3Container {...otherProps} dangerouslySetInnerHTML={{__html: typeof richText === 'object' ? Storyblok.richTextResolver.render(richText) : richText}}/>
);