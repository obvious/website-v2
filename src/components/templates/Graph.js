import React from "react";
import styled from "styled-components";
import { GraphPointList } from "../molecules/GraphPointList";
import { BodyText1 } from "../atoms/BodyText";

const GraphContainer = styled.figure`
`;

export const Graph = props => (
  <GraphContainer>
    {props.labels[0] &&
      props.labels.map(label => <BodyText1 richText={label.text} />)}
    <GraphPointList {...props} />
  </GraphContainer>
);
