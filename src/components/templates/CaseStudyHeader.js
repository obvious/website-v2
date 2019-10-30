import React from 'react'
import styled from "styled-components";

import {BodyText2} from "../atoms/BodyText";
import {HeaderText1} from "../atoms/HeaderText";

const CaseStudyHeaderContainer = styled.section`
  max-width: 60%;
  padding-top: ${props => props.theme.spacings[1]};
  .caption {
    color: ${props => props.theme.colors.lighterBlack}
  }
  .title {
    margin-bottom: ${props => props.theme.spacings[4]};
  }
`;

const CaseStudyHeader = (props) => {
    return (
        <CaseStudyHeaderContainer>
            <HeaderText1 className='title'>{props.title.text}</HeaderText1>
            <BodyText2 className='caption' richText={props.caption.text}/>
        </CaseStudyHeaderContainer>
    )
};

export default CaseStudyHeader;