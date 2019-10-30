import React from "react"
import styled from "styled-components";
import ReactPlayer from 'react-player';

import Button from "../atoms/Button";
import {BodyText3} from "../atoms/BodyText";

const VideoContainer = styled.div`
  position: relative;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  .overlay {
    position: absolute;
    background: ${props => props.theme.colors.blue};
    opacity: 0.3;
    top: ${props => props.theme.paddings[2]};
    left: ${props => props.theme.paddings[2]};
    right: ${props => props.theme.paddings[2]};
    bottom: ${props => props.theme.paddings[2]};
  }
  .content-overlay {
    position: absolute;
    left: ${props => props.theme.spacings[1]};
    bottom: ${props => props.theme.spacings[2]};
    .heading {
      max-width: 60%;
      color: ${props => props.theme.colors.white};
      margin-bottom: ${props => props.theme.spacings[4]};
    }
    .button {
      font-size: ${props=> props.theme.fontSizes[5]};
    }
  }
`;

const Video = (props) => {

    return (
        <VideoContainer {...props}>
            <ReactPlayer url={props.video} width="100%" height="auto" playing={true} loop={true} />
            <div className="overlay">
            </div>
            <div className="content-overlay">
                <BodyText3 className="heading" richText={props.overlayHeading}></BodyText3>
                <Button>{props.overlayButtonText || 'Watch'}</Button>
            </div>
        </VideoContainer>
    )

};

export default Video;
