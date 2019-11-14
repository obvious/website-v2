import React from "react";
import styled from "styled-components";
import { NewsCard } from "./NewsCard";
import { HeaderText2, HeaderText4 } from "../atoms/HeaderText";

const NewsCardListContainer = styled.ol`
  all: unset;
  
//  TODO: Add a scrollbar at the bottom
`;

export const NewsCardList = props => {
  let newsStories = Object.values(props);
  newsStories = newsStories.map(newsStory => {
      const content = JSON.parse(newsStory.content);
    return {
        name: newsStory.name,
        date_published: new Date(content.date_published).toLocaleDateString(undefined, {month: "short", day:"2-digit"}),
        context_setting_text: content.context_setting_text,
        feature_image: content.related_story[0].article && content.related_story[0].article.content.featuredImage.length ? content.related_story[0].article.content.featuredImage : null
    };
  });

  return (
    <NewsCardListContainer>
      <HeaderText2>News</HeaderText2>
      {newsStories.map(newsStory => (
        <NewsCard {...newsStory} />
      ))}
    </NewsCardListContainer>
  );
};
