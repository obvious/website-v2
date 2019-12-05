import React from "react";
import styled from "styled-components";

import { HeaderText1 } from "../../atoms/HeaderText";
import { BodyText2 } from "../../atoms/BodyText";
import SbEditable from "storyblok-react";

const PageHeaderContainer = styled.div`
  max-width: 60%;
  padding-top: ${props => props.theme.spacings[1]};
  margin-bottom: ${props => props.theme.spacings[1]};
  .title {
    margin-bottom: ${props => props.theme.spacings[4]};
  }
  .caption {
    color: ${props => props.theme.colors.lighterBlack};
    margin-bottom: ${props => props.theme.spacings[3]};
  }
`;

const PageHeader = props => {
  return (
    <PageHeaderContainer>
      <SbEditable content={props.editableTitleProps || props}>
        <HeaderText1 className="title">{props.title}</HeaderText1>
      </SbEditable>
      {props.caption && (
        <SbEditable content={props.editableCaptionProps || props}>
          <BodyText2 className="caption" richText={props.caption} />
        </SbEditable>
      )}
      {props.children}
    </PageHeaderContainer>
  );
};

export default PageHeader;
