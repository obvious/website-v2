import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CardGroup from "../../molecules/CardGroup";
import { HeaderText2 } from "../../atoms/HeaderText";

const CaseStudyRelatedArticlesContainer = styled.aside`
  margin-left: ${props => props.theme.spacings[2]};

  .card-group {
    margin-top: ${props => props.theme.spacings[3]};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${props => props.theme.spacings[4]};
  }
`;

const CaseStudyRelatedArticles = ({ heading, articles }) => {
  const articleCards = articles.map(article => {
    return {
      caption: article.name,
      url: `/${article.full_slug}`,
      featuredImage: article.content.featuredImage
    };
  });
  return (
    <CaseStudyRelatedArticlesContainer>
      <HeaderText2>{heading}</HeaderText2>
      <CardGroup cards={articleCards} />
    </CaseStudyRelatedArticlesContainer>
  );
};

CaseStudyRelatedArticles.propTypes = {
  heading: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired
};

export default CaseStudyRelatedArticles;
