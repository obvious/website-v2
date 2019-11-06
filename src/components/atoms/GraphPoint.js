import React from "react";
import styled from "styled-components";
import {CaptionText2, CaptionTextHighlight} from "./CaptionText";
import {Divider} from "./Divider";

const GraphPointContainer = styled.div`
  .caption {
    max-width: ${props => props.theme.captionWidth};
  }
`;

export const GraphPoint = props => (
         <GraphPointContainer>
           <div className="point"></div>
           <div className="caption">
             <CaptionText2>{props.label[0].text}</CaptionText2>
             {props.specialLabel[0] ? (
               <CaptionTextHighlight>
                   <Divider/>
                 {props.specialLabel[0].Text}
               </CaptionTextHighlight>
             ) : null}
           </div>
         </GraphPointContainer>
       );
