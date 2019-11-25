import React from "react";
import styled from "styled-components";

const DividerContainer = styled.span`
  display: block;
  border-bottom: ${props => props.theme.colors.gray} solid 2px;
  margin-top: ${props => props.theme.paddings[4]};
  margin-bottom: ${props => props.theme.paddings[4]};
`;

export const Divider = props => (
  <DividerContainer className={props.className} />
);
