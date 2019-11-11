import React from 'react'
import styled from "styled-components";

import PageHeader from "../common/PageHeader";
import LinkGroup from "../../molecules/LinkGroup";

const CaseStudyHeaderContainer = styled.section`
  .links {
    color: ${props => props.theme.colors.blue};
    font-size: ${props=> props.theme.fontSizes[5]};
    line-height: ${props=> props.theme.lineHeights[2]};
    margin-top: ${props => props.theme.spacings[3]};
  }
`;

const CaseStudyHeader = (props) => {
    return (
        <CaseStudyHeaderContainer>
            <PageHeader className='title' title={props.title[0].text} caption={props.caption[0].text}>
                <LinkGroup className='links' links={props.links[0].links}/>
            </PageHeader>

        </CaseStudyHeaderContainer>
    )
};

export default CaseStudyHeader;