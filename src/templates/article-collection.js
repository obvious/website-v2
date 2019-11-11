import React from 'react'
import styled from "styled-components";

import PageHeader from "../components/templates/common/PageHeader";
import Image from "../components/atoms/Image";
import {BodyText3, BodyText2} from "../components/atoms/BodyText";

const ArticleCollectionContainer = styled.main`
  .page-content {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: ${props => props.theme.spacings[3]};
    padding-bottom: ${props => props.theme.spacings[0]};
  }
  .caption {
    color: ${props => props.theme.colors.lighterBlack};
  }
`;

const ArticleCollection = ({pageContext, theme}) => {

    return (
        <ArticleCollectionContainer theme={theme}>
            <PageHeader title={pageContext.data.name} caption="This is a collection of articles"/>
            <div className="page-content">
                <Image className="featured-image" url={pageContext.data.content.featuredImage}/>
                <BodyText3 className="text" richText={pageContext.data.content.caption} />
            </div>
        </ArticleCollectionContainer>
    )
};

export default ArticleCollection;