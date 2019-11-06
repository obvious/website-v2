import React from 'react'
import styled from "styled-components";

import CaseStudyHeader from "../components/templates/case-studies/CaseStudyHeader";
import CaseStudySection1 from "../components/templates/case-studies/CaseStudySection1";
import CaseStudySection2 from "../components/templates/case-studies/CaseStudySection2";
import CaseStudySection3 from "../components/templates/case-studies/CaseStudySection3";
import CaseStudyRelatedArticles from "../components/templates/case-studies/CaseStudyRelatedArticles";

const CaseStudyContainer = styled.main`
  padding-bottom: ${props => props.theme.spacings[1]};
`;

const CaseStudy = ({pageContext: {data}, ...otherProps}) => {
    return (
        <CaseStudyContainer {...otherProps}>
            <CaseStudyHeader {...data.header[0]}/>
            <CaseStudySection1 {...data.sections[0]}/>
            <CaseStudySection2 {...data.sections[1]}/>
            <CaseStudySection3 {...data.sections[2]}/>
            <CaseStudyRelatedArticles articles={data.relatedArticles} heading={`Stories from ${data.header[0].title[0].text}`}/>
        </CaseStudyContainer>
    )
};

export default CaseStudy;