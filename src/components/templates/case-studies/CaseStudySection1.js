import React from 'react'
import styled from "styled-components";

import Video from "../../molecules/Video";

import ImageSet from "../../molecules/ImageSet";

import {HeaderText4} from "../../atoms/HeaderText";
import {BodyText3} from "../../atoms/BodyText";

const CaseStudySection1Container = styled.section`
  .video {
    margin-bottom: ${props => props.theme.spacings[2]};
  }
  .subsection-2 {
    
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${props => props.theme.spacings[4]};
    margin-bottom: ${props => props.theme.spacings[2]};
  }
  
  
  margin-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudySection1 = (props) => {
    console.log(props.otherBlocks[1])
    return (
        <CaseStudySection1Container>
            <Video className="video" {...props.otherBlocks[0]}/>
            <div className="subsection-2">
                <HeaderText4>{props.heading.text}</HeaderText4>
                <BodyText3 richText={props.description.text} />
            </div>
            <div className="subsection-3">
                <ImageSet {...props.otherBlocks[1]}/>
            </div>
        </CaseStudySection1Container>
    )
};

export default CaseStudySection1;