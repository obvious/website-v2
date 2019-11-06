import React from "react";
import styled from "styled-components";

import Video from "../../molecules/Video";

import ImageSet from "../../molecules/ImageSet";

import { HeaderText4 } from "../../atoms/HeaderText";
import { BodyText3 } from "../../atoms/BodyText";
import Image from "../../atoms/Image";
import {CaptionText1, CaptionTextHighlight} from "../../atoms/CaptionText";

const CaseStudySection3Container = styled.section`
  .subsection-1 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: ${props => props.theme.spacings[4]};
    margin-bottom: ${props => props.theme.spacings[2]};
  }

  .description {
  margin-top: ${props => props.theme.spacings[3]};
  }

  .image {
    display: inline-block;
  }

  margin-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudySection3 = props => {
  return (
    <CaseStudySection3Container>
      <div className="subsection-1">
        <div>
          <HeaderText4 >{props.heading[0].text}</HeaderText4>
          <BodyText3 className="description" richText={props.description[0].text} />
        </div>
        <Image className="image" url={props.otherBlocks[0].image} />
      </div>
        <CaptionText1>Stuff</CaptionText1>
        <CaptionTextHighlight>And bother</CaptionTextHighlight>
    </CaseStudySection3Container>
  );
};

export default CaseStudySection3;
