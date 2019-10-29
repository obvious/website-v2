import React from 'react'

const ArticleCollection = ({pageContext}) => {

    return (
        <div>
            {JSON.stringify(pageContext.data)}
        </div>
    )
};

export default ArticleCollection;