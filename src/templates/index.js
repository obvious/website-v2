import React from "react"
import styled from "styled-components";

import {HeaderText1} from '../components/atoms/HeaderText'

const IndexPageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IndexPage = ({pageContext: {data}}) => (
    <IndexPageContainer>
            <HeaderText1>Hello World.</HeaderText1>
    </IndexPageContainer>
);

export default IndexPage;