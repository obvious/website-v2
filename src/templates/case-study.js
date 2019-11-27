import React from "react";
import styled from "styled-components";

import CaseStudyHeader from "../components/templates/case-studies/CaseStudyHeader";
import CaseStudyRelatedArticles from "../components/templates/case-studies/CaseStudyRelatedArticles";
import FindComponent from "../components/find-component";

const CaseStudyContainer = styled.main`
  padding-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudy = ({ data, theme }) => {
  return (
    <CaseStudyContainer theme={theme}>
      <CaseStudyHeader {...data.content.header[0]} />
      {data.content.sections.map(section =>
        React.createElement(
          FindComponent(section.templateName[0], data.content.full_slug),
          { key: section._uid, ...section }
        )
      )}
      <CaseStudyRelatedArticles
        articles={data.content.relatedArticles}
        heading={`Stories from ${data.content.header[0].title[0].text}`}
      />
    </CaseStudyContainer>
  );
};

export default CaseStudy;
