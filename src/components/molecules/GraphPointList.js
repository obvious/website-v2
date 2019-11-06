import React from "react";
import styled from "styled-components";

import { GraphPoint } from "../atoms/GraphPoint";

const GraphPointListContainer = styled.div`
  //  TODO: Pull the graph out into the body by 60px
`;

export const GraphPointList = props => (
  <GraphPointListContainer>
    {props.points[0] && props.points.map(point => <GraphPoint {...point} />)}
  </GraphPointListContainer>
);
