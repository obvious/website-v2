import React from "react";
import styled from "styled-components";

import CaseStudyHeader from "../components/templates/case-studies/CaseStudyHeader";
import CaseStudyRelatedArticles from "../components/templates/case-studies/CaseStudyRelatedArticles";
import FindComponent from "../components/find-component";

const CaseStudyContainer = styled.main`
  padding-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudy = ({ story, theme }) => {
  return (
    <CaseStudyContainer theme={theme}>
      <CaseStudyHeader {...story.content.header[0]} />
      {story.content.sections.map(section =>
        React.createElement(
          FindComponent(section.templateName[0], story.content.full_slug),
          { key: section._uid, ...section }
        )
      )}
      <CaseStudyRelatedArticles
        articles={story.content.relatedArticles}
        heading={`Stories from ${story.content.header[0].title[0].text}`}
      />
    </CaseStudyContainer>
  );
};

export default CaseStudy;
