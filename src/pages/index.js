import React from "react"
import DefaultLayout from "../components/layouts/DefaultLayout";
import styled from "styled-components";
import { graphql } from 'gatsby'

const IndexPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes[4]}px;
`;

const IndexPage = ({data}) => (
    <DefaultLayout>
        <IndexPageContainer>
            Hello world!
            <p>{JSON.stringify(data)}</p>
        </IndexPageContainer>
    </DefaultLayout>
);

export const query = graphql`
    query IndexPageQuery {
        allStoryblokEntry {
            edges {
                node {
                    id
                    name
                    created_at
                    published_at
                    uuid
                    slug
                    full_slug
                    content
                    is_startpage
                    parent_id
                    group_id
                }
            }
        }
    }
`

export default IndexPage;