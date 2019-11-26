import React from "react";
import styled from "styled-components";

import Link from "../../atoms/Link";
import ArticleListItem from "./ArticleListItem";

const ArticleListContainer = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.paddings[0]};
  align-content: start;
  a.read-more-articles-link {
    font-size: ${props => props.theme.fontSizes[7]};
    line-height: ${props => props.theme.lineHeights[7]};
    align-self: end;
  }
`;

const ArticleList = props => {
  const noOfArticlesToShow = 4;
  const noOfExtraArticles = props.articles.length - noOfArticlesToShow;
  return (
    <ArticleListContainer>
      {props.articles.slice(0, noOfArticlesToShow).map(article => (
        <ArticleListItem key={article.uuid} {...article} />
      ))}
      {noOfExtraArticles > 0 ? (
        <Link
          className="read-more-articles-link"
          url={{ url: `/${props.full_slug}` }}
        >
          {noOfExtraArticles === 1
            ? `+ 1 more article →`
            : `+ ${noOfExtraArticles} articles →`}
        </Link>
      ) : null}
    </ArticleListContainer>
  );
};

export default ArticleList;
