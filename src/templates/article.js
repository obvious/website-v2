import React from 'react'

const Article = ({pageContext}) => {

    return (
        <div>
            {JSON.stringify(pageContext.data)}
        </div>
    )
};

export default Article;