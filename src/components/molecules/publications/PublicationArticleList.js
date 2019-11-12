import React from "react"
import styled from "styled-components";

import Link from "../../atoms/Link";
import PublicationArticleListItem from "./PublicationArticleListItem";

const ArticleCollectionArticleListContainer = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.paddings[1]};
  a.read-more-articles-link {
    font-size: ${props => props.theme.fontSizes[7]};
    line-height: ${props => props.theme.lineHeights[7]};
    align-self: end; 
  }
`;

const PublicationArticleList = (props) => {
    const noOfArticlesToShow = 4;
    const noOfExtraArticles = props.articles.length - noOfArticlesToShow;
    return (<ArticleCollectionArticleListContainer {...props}>
        {props.articles.slice(0, noOfArticlesToShow).map(article =>
            <PublicationArticleListItem key={article.uuid} {...article}/>)}
        {noOfExtraArticles > 0 ?
            (<Link
                className="read-more-articles-link"
                url={{url: `/${props.full_slug}`}}
            >
                {noOfExtraArticles === 1  ? `+ 1 more article →`: `+ ${noOfExtraArticles} articles →`}
            </Link>) : null
        }

    </ArticleCollectionArticleListContainer>)
};

export default PublicationArticleList;