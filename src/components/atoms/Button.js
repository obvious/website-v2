import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  background: ${props => props.theme.colors.blue};
  padding: ${props => props.theme.paddings[5]}
    ${props => props.theme.paddings[2]};
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  span {
    margin-left: ${props => props.theme.paddings[2]};
  }
`;

const Button = ({ children }) => (
  <ButtonContainer className="button">{children}</ButtonContainer>
);

export default Button;
