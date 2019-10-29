import React from 'react'

const CaseStudy = ({pageContext}) => {

    return (
        <div>
            {JSON.stringify(pageContext.data)}
        </div>
    )
};

export default CaseStudy;