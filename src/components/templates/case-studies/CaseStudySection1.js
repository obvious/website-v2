import React from "react";
import styled from "styled-components";

import Video from "../../molecules/Video";

import ImageSet from "../../molecules/ImageSet";

import { HeaderText4 } from "../../atoms/HeaderText";
import { BodyText3 } from "../../atoms/BodyText";
import SbEditable from "storyblok-react";

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

const CaseStudySection1 = props => {
  return (
    <SbEditable content={props}>
      <CaseStudySection1Container>
        <Video className="video" {...props.video[0]} />
        <div className="subsection-2">
          <SbEditable content={props.heading[0]}>
            <HeaderText4>{props.heading[0].text}</HeaderText4>
          </SbEditable>
          <SbEditable content={props.description[0]}>
            <BodyText3 richText={props.description[0].text} />
          </SbEditable>
        </div>
        <div className="subsection-3">
          <ImageSet {...props.imageSet[0]} />
        </div>
      </CaseStudySection1Container>
    </SbEditable>
  );
};

export default CaseStudySection1;
