import React from 'react'
import styled from "styled-components";

import {BodyText2} from "../atoms/BodyText";
import {HeaderText1} from "../atoms/HeaderText";
import LinkGroup from "../molecules/LinkGroup";

const CaseStudyHeaderContainer = styled.section`
  max-width: 60%;
  padding-top: ${props => props.theme.spacings[1]};
  .caption {
    color: ${props => props.theme.colors.lighterBlack};
    margin-bottom: ${props => props.theme.spacings[3]};
  }
  .title {
    margin-bottom: ${props => props.theme.spacings[4]};
  }
  .links {
    color: ${props => props.theme.colors.blue};
    font-size: ${props=> props.theme.fontSizes[5]};
    line-height: ${props=> props.theme.lineHeights[2]};
  }
  margin-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudyHeader = (props) => {
    return (
        <CaseStudyHeaderContainer>
            <HeaderText1 className='title'>{props.title.text}</HeaderText1>
            <BodyText2 className='caption' richText={props.caption.text}/>
            <LinkGroup className='links' links={props.links.links}></LinkGroup>
        </CaseStudyHeaderContainer>
    )
};

export default CaseStudyHeader;