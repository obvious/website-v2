import React from "react"
import styled from "styled-components";

import {HeaderText1} from '../components/atoms/HeaderText'
import {HeaderText2} from '../components/atoms/HeaderText'
import {HeaderText3} from '../components/atoms/HeaderText'
import {HeaderText4} from '../components/atoms/HeaderText'
import {HeaderText5} from '../components/atoms/HeaderText'

const IndexPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IndexPage = ({pageContext}) => (
    <IndexPageContainer>
        <HeaderText1>{JSON.stringify(pageContext.data)}</HeaderText1>
        <HeaderText2>{JSON.stringify(pageContext.data)}</HeaderText2>
        <HeaderText3>{JSON.stringify(pageContext.data)}</HeaderText3>
        <HeaderText4>{JSON.stringify(pageContext.data)}</HeaderText4>
        <HeaderText5>{JSON.stringify(pageContext.data)}</HeaderText5>
    </IndexPageContainer>
);

export default IndexPage;