import React from 'react'
import CaseStudyHeader from "../components/templates/case-studies/CaseStudyHeader";

const CaseStudy = ({pageContext}) => {

    return (
        <div>
            <CaseStudyHeader {...pageContext.data.header}/>
        </div>
    )
};

export default CaseStudy;