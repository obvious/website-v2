import React from "react";
import styled from "styled-components";

import { GraphPoint } from "./GraphPoint";

const GraphPointListContainer = styled.div`
  //TODO: Draw lines connecting the different GraphPoints
`;

export const GraphPointList = props => (
  <GraphPointListContainer>
    {props.points[0] && props.points.map(point => <GraphPoint {...point} />)}
  </GraphPointListContainer>
);
