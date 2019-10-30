import React from 'react'
import CaseStudyHeader from "../components/templates/case-studies/CaseStudyHeader";
import CaseStudySection1 from "../components/templates/case-studies/CaseStudySection1";
import CaseStudySection2 from "../components/templates/case-studies/CaseStudySection2";

const CaseStudy = ({pageContext}) => {

    return (
        <div>
            <CaseStudyHeader {...pageContext.data.header}/>
            <CaseStudySection1 {...pageContext.data.sections[0]}/>
            {/*<CaseStudySection2 {...pageContext.data.sections[1]}/>*/}
        </div>
    )
};

export default CaseStudy;