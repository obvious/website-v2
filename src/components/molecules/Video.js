import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import Button from "../atoms/Button";
import { BodyText3 } from "../atoms/BodyText";

const VideoContainer = styled.div`
  position: relative;
  text-decoration: none;
  .video-player {
    width: 100% !important;
    height: auto !important;
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
    left: ${props => (props.hasOverlay ? props.theme.spacings[1] : "auto")};
    right: ${props => (props.hasOverlay ? "auto" : props.theme.spacings[4])};
    bottom: ${props =>
      props.hasOverlay ? props.theme.spacings[2] : props.theme.spacings[4]};
    .heading {
      max-width: 60%;
      color: ${props => props.theme.colors.white};
      margin-bottom: ${props => props.theme.spacings[4]};
    }
    .button {
      font-size: ${props => props.theme.fontSizes[5]};
    }
  }
`;

const Video = ({ video, ...otherProps }) => {
  return (
    <VideoContainer>
      <ReactPlayer
        url={video}
        className="video-player"
        playing={true}
        loop={true}
      />
      {otherProps.hasOverlay ? <div className="overlay" /> : null}
      <div className="content-overlay">
        {otherProps.hasOverlay ? (
          <BodyText3
            className="heading"
            richText={otherProps.overlayHeading}
          ></BodyText3>
        ) : null}
        <Button>{otherProps.overlayButtonText || "Watch"}</Button>
      </div>
    </VideoContainer>
  );
};

export default Video;
