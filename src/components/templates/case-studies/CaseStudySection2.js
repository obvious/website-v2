import React from 'react'
import styled from "styled-components";

import Video from "../../molecules/Video";

import {HeaderText4} from "../../atoms/HeaderText";
import {BodyText3} from "../../atoms/BodyText";

const CaseStudySection2Container = styled.section`
  .video {
    margin-bottom: ${props => props.theme.spacings[2]};
  }
  .subsection-1 {
    
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${props => props.theme.spacings[4]};
  }
  
  margin-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudySection2 = (props) => {
    return (
        <CaseStudySection2Container>
            <Video className="video" {...props.otherBlocks[0]}/>
            <div className="subsection-1">
                <HeaderText4>{props.heading.text}</HeaderText4>
                <BodyText3 richText={props.description.text} />
            </div>
        </CaseStudySection2Container>
    )
};

export default CaseStudySection2;