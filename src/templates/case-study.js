import React from 'react'
import CaseStudyHeader from "../components/templates/case-studies/CaseStudyHeader";
import CaseStudySection1 from "../components/templates/case-studies/CaseStudySection1";
import CaseStudySection2 from "../components/templates/case-studies/CaseStudySection2";

const CaseStudy = ({pageContext: {data}}) => {

    return (
        <div>
            <CaseStudyHeader {...data.header}/>
            <CaseStudySection1 {...data.sections[0]}/>
            <CaseStudySection2 {...data.sections[1]}/>
        </div>
    )
};

export default CaseStudy;