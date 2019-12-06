import React from "react";
import styled from "styled-components";

import { HeaderText4 } from "../../atoms/HeaderText";
import { BodyText3 } from "../../atoms/BodyText";
import Image from "../../atoms/Image";

import { Graph } from "../../templates/Graph";
import SbEditable from "storyblok-react";

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
    <SbEditable content={props}>
      <CaseStudySection3Container>
        <div className="subsection-1">
          <div>
            <SbEditable content={props.heading[0]}>
              <HeaderText4>{props.heading[0].text}</HeaderText4>
            </SbEditable>
            <SbEditable content={props.description[0]}>
              <BodyText3
                className="description"
                richText={props.description[0].text}
              />
            </SbEditable>
          </div>
          <SbEditable content={props.image[0]}>
            <Image className="image" url={props.image[0].image} />
          </SbEditable>
        </div>
        <Graph {...props.graph[0]} />
      </CaseStudySection3Container>
    </SbEditable>
  );
};

export default CaseStudySection3;
