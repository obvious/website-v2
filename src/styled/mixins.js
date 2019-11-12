import {css} from "styled-components";

export const ClampLines = (lineCount) => {
   return css`
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: ${lineCount};
    -webkit-box-orient: vertical;
   `
};