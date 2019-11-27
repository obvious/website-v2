import React from "react";
import styled from "styled-components";

import PageHeader from "../components/templates/common/PageHeader";
import Image from "../components/atoms/Image";
import { BodyText3 } from "../components/atoms/BodyText";

const ArticleContainer = styled.main`
  .page-content {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: ${props => props.theme.spacings[3]};
    padding-bottom: ${props => props.theme.spacings[0]};
  }
`;

const Article = ({ data, theme }) => {
  return (
    <ArticleContainer theme={theme}>
      {data && (
        <>
          <PageHeader title={data.name} caption="This is a single article" />
          <div className="page-content">
            <Image
              className="featured-image"
              url={data.content.featuredImage}
            />
            <BodyText3 className="text" richText={data.content.caption} />
          </div>
        </>
      )}
    </ArticleContainer>
  );
};

export default Article;
