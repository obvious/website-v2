import React from "react";
import styled from "styled-components";

import Video from "../../molecules/Video";

import { HeaderText4 } from "../../atoms/HeaderText";
import { BodyText3 } from "../../atoms/BodyText";
import SbEditable from "storyblok-react";

const CaseStudySection2Container = styled.section`
  .subsection-1 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${props => props.theme.spacings[4]};
    align-items: start;
    margin-bottom: ${props => props.theme.spacings[4]};
    .header-and-description {
      height: 100%;
      display: grid;
      .header {
        margin-bottom: ${props => props.theme.spacings[4]};
      }
      .description {
        align-self: end;
      }
    }
  }

  .subsection-2 {
    display: grid;
    grid-template-columns: 33.33%;
    justify-content: end;
    grid-gap: ${props => props.theme.spacings[4]};
    margin-bottom: ${props => props.theme.spacings[2]};
  }
`;

const CaseStudySection2 = props => {
  return (
    <SbEditable content={props}>
      <CaseStudySection2Container>
        <div className="subsection-1">
          <div className="header-and-description">
            <HeaderText4 className="header">
              {props.heading[0].text}
            </HeaderText4>
            <BodyText3
              className="description"
              richText={props.description[0].text}
            />
          </div>
          <Video className="video full" {...props.otherBlocks[1]} />
        </div>

        <div className="subsection-2">
          <BodyText3 richText={props.otherBlocks[0].text} />
        </div>
      </CaseStudySection2Container>
    </SbEditable>
  );
};

export default CaseStudySection2;
