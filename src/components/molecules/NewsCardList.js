import React from "react";
import styled from "styled-components";
import { NewsCard } from "./NewsCard";
import { HeaderText2, HeaderText4 } from "../atoms/HeaderText";

const NewsCardListContainer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .heading {
    font-weight: 300;
    padding: ${props => props.theme.spacings[2]} 0;
  }
  
  .newsCard-group {
    display: flex;
    flex-direction: row;
  }

  .scrollbar {
    padding-top: ${props => props.theme.spacings[2]};
    display: flex;
    align-content: baseline;
  }

  .scrollbar-item {
    width: 56px;
    border: solid 2px ${props => props.theme.colors.gray};
    
    .highlighted {
      border: solid 4px ${props => props.theme.colors.blue};
    }
  }
`;

export const NewsCardList = props => {
  let newsStories = Object.values(props);
  newsStories = newsStories.map(newsStory => {
    const content = JSON.parse(newsStory.content);
    return {
      name: newsStory.name,
      date_published: new Date(
        content.date_published
      ).toLocaleDateString(undefined, { month: "short", day: "2-digit" }),
      context_setting_text: content.context_setting_text,
      feature_image:
        content.related_story[0].article &&
        content.related_story[0].article.content.featuredImage.length
          ? content.related_story[0].article.content.featuredImage
          : null
    };
  });

  return (
    <NewsCardListContainer {...props}>
      <HeaderText2 className="heading">News</HeaderText2>
      <div className="newsCard-group">
        {newsStories.map(newsStory => (
          <NewsCard {...newsStory} />
        ))}
      </div>
      <div className="scrollbar">
        {newsStories.map(item => (
          <div className="scrollbar-item" />
        ))}
      </div>
    </NewsCardListContainer>
  );
};
