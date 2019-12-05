import React from "react";
import styled from "styled-components";

import { GraphPoint } from "./GraphPoint";
import SbEditable from "storyblok-react";

const GraphPointListContainer = styled.div`
  //TODO: Draw lines connecting the different GraphPoints
`;

export const GraphPointList = props => (
  <GraphPointListContainer>
    {props.points[0] && props.points.map(point => <SbEditable content={point}><GraphPoint {...point} /></SbEditable>)}
  </GraphPointListContainer>
);
