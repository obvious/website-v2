import React from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  color: ${props => props.theme.colors[props.color]};
  background-color: ${props => props.theme.backgrounds[props.backgroundColor]};
  padding: 0 ${props => props.theme.paddings[4]};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes[7]};
  line-height: ${props => props.theme.lineHeights[7]};
  font-size: ${props=> props.theme.fontSizes[7]};
  line-height: ${props=> props.theme.lineHeights[7]};
  justify-self: start;
  align-self: start;
  display: inline-flex;
  border-radius: ${props => props.theme.borderRadii.smaller};
  text-transform: ${props => props.textTransform};
`;

const Tag = (props) => {
  let color, backgroundColor, textTransform;
  switch (props.type) {
    case "latest":
      color = "white";
      backgroundColor = "orange";
      textTransform = "uppercase";
      break;
    case "news":
      color = "black";
      backgroundColor = "white";
      textTransform = "uppercase";
      break;
    default:
      color = "darkgray";
      backgroundColor = "gray";
      textTransform = "capitalize";

  }
  return (
    <TagContainer
      {...props}
      color={color}
      backgroundColor={backgroundColor}
      textTransform={textTransform}
      className="tag"
    >
      {props.children}
    </TagContainer>
  );
};

export default Tag;
