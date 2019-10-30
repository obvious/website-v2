import React from "react"
import styled from "styled-components";

const IndexPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes[4]}px;
`;

const IndexPage = ({pageContext}) => (
    <IndexPageContainer>
        <p>{JSON.stringify(pageContext.data)}</p>
    </IndexPageContainer>
);

export default IndexPage;