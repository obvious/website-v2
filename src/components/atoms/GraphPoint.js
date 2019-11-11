import React from "react";
import styled from "styled-components";
import { CaptionText2, CaptionTextHighlight } from "./CaptionText";
import { Divider } from "./Divider";

const GraphPointContainer = styled.div`
  display: inline-block;
  max-width: ${props => props.theme.captionWidth};
  position: relative;
  left: ${props => Number(props.xCoordinate)}vw;
  bottom: ${props => Number(props.yCoordinate)}vh;

  .point {
    width: ${props => props.theme.spacings[4]};
    height: ${props => props.theme.spacings[4]};
    border: ${props => props.theme.colors.gray} solid 2px;
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
    <div className="point"></div>
    <CaptionText2>{props.label[0].text}</CaptionText2>
    {props.specialLabel[0] ? (
      <>
        <Divider className="divider-spacing" />
        <CaptionTextHighlight>
          {props.specialLabel[0].Text}
        </CaptionTextHighlight>
      </>
    ) : null}
  </GraphPointContainer>
);
