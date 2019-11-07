import React from 'react'
import styled from "styled-components";

import PageHeader from "../common/PageHeader";
import {BodyText2} from "../../atoms/BodyText";
import LinkGroup from "../../molecules/LinkGroup";

const CaseStudyHeaderContainer = styled.section`
  .caption {
    color: ${props => props.theme.colors.lighterBlack};
    margin-bottom: ${props => props.theme.spacings[3]};
  }
  .links {
    color: ${props => props.theme.colors.blue};
    font-size: ${props=> props.theme.fontSizes[5]};
    line-height: ${props=> props.theme.lineHeights[2]};
  }
`;

const CaseStudyHeader = (props) => {
    return (
        <CaseStudyHeaderContainer>
            <PageHeader className='title' title={props.title[0].text}>
                <BodyText2 className='caption' richText={props.caption[0].text}/>
                <LinkGroup className='links' links={props.links[0].links}></LinkGroup>
            </PageHeader>

        </CaseStudyHeaderContainer>
    )
};

export default CaseStudyHeader;