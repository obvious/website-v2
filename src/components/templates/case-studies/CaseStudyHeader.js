import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SbEditable from "storyblok-react";
import PageHeader from "../common/PageHeader";
import LinkGroup from "../../molecules/LinkGroup";

const CaseStudyHeaderContainer = styled.section`
  .links {
    color: ${props => props.theme.colors.blue};
    font-size: ${props => props.theme.fontSizes[5]};
    line-height: ${props => props.theme.lineHeights[2]};
    margin-top: ${props => props.theme.spacings[3]};
  }
`;

const CaseStudyHeader = props => {
  const { title, caption, links } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <SbEditable content={props}>
      <CaseStudyHeaderContainer>
        <SbEditable content={props}>
          <PageHeader
            className="title"
            editableTitleProps={title[0]}
            editableCaptionProps={caption[0]}
            title={title[0].text}
            caption={caption[0] && caption[0].text}
          >
            {links[0] && <LinkGroup className="links" links={links[0].links} />}
          </PageHeader>
        </SbEditable>
      </CaseStudyHeaderContainer>
    </SbEditable>
  );
};

CaseStudyHeader.propTypes = {
  title: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  caption: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      links: PropTypes.array.isRequired
    })
  )
};

CaseStudyHeader.defaultProps = {
  caption: [
    {
      text: ""
    }
  ],
  links: [
    {
      links: []
    }
  ]
};

export default CaseStudyHeader;
