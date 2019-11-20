import React from "react"
import styled from "styled-components";

import {MakeLinesClamp} from "../styled/mixins";

import {HeaderText5, HeaderText2} from '../components/atoms/HeaderText'

import {groupBy} from '../utils'
import PageHeader from "../components/templates/common/PageHeader";
import Link from "../components/atoms/Link";
import {NewsCardList} from "../components/molecules/NewsCardList";

const IndexPageContainer = styled.div`
  padding-bottom: ${props => props.theme.spacings[0]};
  .homepage-section-header {
    text-transform: capitalize;
    margin-top: ${props => props.theme.spacings[3]};
  }
  .homepage-section-item {
    ${MakeLinesClamp(1)}
  }
`;

const IndexPage = ({pageContext: {data}, theme}) => {

    let filteredStories = data.filter(item => {
        const contentType = item.node.full_slug.split('/')[0];
        item.node.contentType = contentType;
        return ['case-studies', 'publications'].indexOf(contentType) > -1;
    });

    let newsStories = data.filter(item => {
        const contentType = item.node.full_slug.split('/')[0];
        item.node.contentType = contentType;
        return ['news'].indexOf(contentType) > -1;
    })

    filteredStories = filteredStories.map(item => item.node);
    newsStories = Object.values(newsStories.map(item => item.node));

    const groupedStories = groupBy(filteredStories, story => story.contentType);

    return(<IndexPageContainer theme={theme}>
        <PageHeader title={`Hello World.`}/>

        <NewsCardList {...newsStories}/>

        {Object.keys(groupedStories).map(key =>
            (<>
                <HeaderText2 className="homepage-section-header">{key.replace('-', ' ')}</HeaderText2>
                <ul>
                    {groupedStories[key].map(item => (
                        <li key={item.uuid}>
                            <HeaderText5 className="homepage-section-item"><Link url={{url: item.full_slug}}>{item.name}</Link></HeaderText5>
                        </li>
                    ))}
                </ul>
            </>)
        )}
    </IndexPageContainer>)
};

export default IndexPage;