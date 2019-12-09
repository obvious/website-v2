import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StoryblokClient = require("storyblok-js-client");
const credentials = require("../../../credentials.json");

let Storyblok = new StoryblokClient({
  accessToken: credentials.storyblokPublicKey
});

const BodyText1Container = styled.div`
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: ${props => props.theme.lineHeights[1]};
  > div > p {
    &:not(:last-child) {
      margin-bottom: ${props => props.theme.lineHeights[1]};
    }
  }
  ul {
    list-style: initial;
  }
  li {
    list-style-position: inside;
    p {
      display: inline;
    }
  }
`;

/**
 * Use `BodyText1` to make a large point; for example to showcase some statistics in a graoh
 */
export const BodyText1 = ({ richText, ...otherProps }) => (
  <BodyText1Container
    {...otherProps}
    dangerouslySetInnerHTML={{
      __html:
        typeof richText === "object"
          ? `<div>${Storyblok.richTextResolver.render(richText)}</div>`
          : richText
    }}
  />
);

const BodyText2Container = styled.div`
  font-size: ${props => props.theme.fontSizes[2]};
  line-height: ${props => props.theme.lineHeights[2]};
  > div > p {
    &:not(:last-child) {
      margin-bottom: ${props => props.theme.lineHeights[2]};
    }
  }
  ul {
    list-style: initial;
  }
  li {
    list-style-position: inside;
    p {
      display: inline;
    }
  }
`;

export const BodyText2 = ({ richText, ...otherProps }) => (
  <BodyText2Container
    {...otherProps}
    dangerouslySetInnerHTML={{
      __html:
        typeof richText === "object"
          ? `<div>${Storyblok.richTextResolver.render(richText)}</div>`
          : richText
    }}
  />
);

const BodyText3Container = styled.div`
  font-size: ${props => props.theme.fontSizes[5]};
  line-height: ${props => props.theme.lineHeights[5]};
  > div > p {
    &:not(:last-child) {
      margin-bottom: ${props => props.theme.lineHeights[5]};
    }
  }
  ul {
    list-style: initial;
  }
  li {
    list-style-position: inside;
    p {
      display: inline;
    }
  }
`;

export const BodyText3 = ({ richText, ...otherProps }) => (
  <BodyText3Container
    {...otherProps}
    dangerouslySetInnerHTML={{
      __html:
        typeof richText === "object"
          ? `<div>${Storyblok.richTextResolver.render(richText)}</div>`
          : richText
    }}
  />
);

const BodyText5Container = styled.div`
  font-size: ${props => props.theme.fontSizes[7]};
  line-height: ${props => props.theme.lineHeights[7]};
  > div > p {
    &:not(:last-child) {
      margin-bottom: ${props => props.theme.lineHeights[5]};
    }
  }
  ul {
    list-style: initial;
  }
  li {
    list-style-position: inside;
    p {
      display: inline;
    }
  }
`;

export const BodyText5 = ({ richText, ...otherProps }) => (
  <BodyText5Container
    {...otherProps}
    dangerouslySetInnerHTML={{
      __html:
        typeof richText === "object"
          ? `<div>${Storyblok.richTextResolver.render(richText)}</div>`
          : richText
    }}
  />
);

BodyText1.propTypes = {
  richText: PropTypes.oneOfType(["object", "string"])
};

BodyText2.propTypes = {
  richText: PropTypes.oneOfType(["object", "string"])
};

BodyText3.propTypes = {
  richText: PropTypes.oneOfType(["object", "string"])
};

BodyText5.propTypes = {
  richText: PropTypes.oneOfType(["object", "string"])
};
