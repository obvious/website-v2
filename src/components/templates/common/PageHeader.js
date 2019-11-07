import React from 'react'
import styled from "styled-components";

import {HeaderText1} from "../../atoms/HeaderText";

const PageHeaderContainer = styled.div`
  max-width: 60%;
  padding-top: ${props => props.theme.spacings[1]};
  .title {
    margin-bottom: ${props => props.theme.spacings[4]};
  }
  margin-bottom: ${props => props.theme.spacings[1]};
`;

const PageHeader = (props) => {
    return (
        <PageHeaderContainer>
            <HeaderText1 className='title'>{props.title}</HeaderText1>
            {props.children}
        </PageHeaderContainer>
    )
};

export default PageHeader;