import React from 'react'
import styled from "styled-components";

import Video from "../../molecules/Video";

import {HeaderText4} from "../../atoms/HeaderText";
import {BodyText3} from "../../atoms/BodyText";

const CaseStudySection2Container = styled.section`
  .subsection-1 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${props => props.theme.spacings[4]};

    //grid-template-areas: 'header-and-description video video'
    //'header-and-description video video'
    //'header-and-description video video';
    //  
    //.header-and-description {
    //  grid-area: header-and-description;
    //}
    
    .header {
      margin-bottom: ${props => props.theme.spacings[4]};
    }
    
    margin-bottom: ${props => props.theme.spacings[4]};
    
    .video:not(video) {
      overflow: hidden;
      display: grid;
    }
  }
  
  .subsection-2 {
    
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: ${props => props.theme.spacings[4]};
    
    margin-bottom: ${props => props.theme.spacings[2]};
    
    
  }
  
  margin-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudySection2 = (props) => {
    return (
        <CaseStudySection2Container>
            <div className="subsection-1">
                <div className="header-and-description">
                    <HeaderText4 className="header">{props.heading.text}</HeaderText4>
                    <BodyText3 className="description" richText={props.description.text} />
                </div>
                <Video className="video full" {...props.otherBlocks[1]}/>
            </div>

            <div className="subsection-2">
                <div></div>
                <BodyText3 richText={props.otherBlocks[0].text} />
            </div>
        </CaseStudySection2Container>
    )
};

export default CaseStudySection2;