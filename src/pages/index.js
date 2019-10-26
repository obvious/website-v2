import React from "react"
import DefaultLayout from "../components/layouts/DefaultLayout";
import styled from "styled-components";

const IndexPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes[4]}px;
`;

export default () => (
    <DefaultLayout>
        <IndexPage>
            Hello world!
        </IndexPage>
    </DefaultLayout>
)
