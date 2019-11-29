import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CaptionText2, CaptionTextHighlighted } from "../atoms/CaptionText";
import { Divider } from "../atoms/Divider";

const GraphPointContainer = styled.div`
  display: inline-block;
  max-width: ${props => props.theme.captionWidth};
  margin-left: ${props => props.theme.spacings[4]};
  //TODO: Understand how graph-data input will be done from the editor and find a way to map it accordingly 
  //position: relative;
  // left: ${props => Number(props.xCoordinate)}vw;
  // bottom: ${props => Number(props.yCoordinate)}vh;

  .point {
    display: inline-block;
    width: ${props => props.theme.spacings[4]};
    height: ${props => props.theme.spacings[4]};
    border: ${props => props.theme.colors.gray} solid ${props =>
  props.theme.borderWidth.default};
    border-radius: 50%;
    background-color: ${props =>
      props.isHighlighted && props.theme.colors.blue};
  }

  .divider-spacing {
    margin-bottom: ${props => props.theme.paddings[2]};
  }
`;

export const GraphPoint = props => (
  <GraphPointContainer {...props}>
    <span className="point"></span>
    <CaptionText2>{props.label[0].text}</CaptionText2>
    {props.specialLabel[0] ? (
      <>
        <Divider className="divider-spacing" />
        <CaptionTextHighlighted>
          {props.specialLabel[0].Text}
        </CaptionTextHighlighted>
      </>
    ) : null}
  </GraphPointContainer>
);

//TODO: Refactor this into a named prop
//TODO: add prop=type for shape of this prop
