import { css } from "styled-components";
import theme from "./theme";

export const MakeLinesClamp = lineCount => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: ${lineCount};
    -webkit-box-orient: vertical;
  `;
};

export const MakeFullWidth = () => {
  return css`
    width: 100vw;

    /* prettier-ignore */
    margin-left: calc((100vw - ${theme.containerSizes.default}) / -2);
    /* prettier-ignore */
    margin-right: calc((100vw - ${theme.containerSizes.default}) / -2);

    @media (max-width: ${theme.breakpoints.medium}) {
      /* prettier-ignore */
      margin-left: calc((100vw - ${theme.containerSizes.small}) / -2);
      /* prettier-ignore */
      margin-right: calc((100vw - ${theme.containerSizes.small}) / -2);
    }
  `;
};
