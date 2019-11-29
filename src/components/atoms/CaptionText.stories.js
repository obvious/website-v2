import React from "react";
import { CaptionText2, CaptionTextHighlighted } from "./CaptionText";

export default {
  title: "Captions"
};

export const Caption2 = () => <CaptionText2>This is a caption 2</CaptionText2>;

export const CaptionHighlight = () => (
  <CaptionTextHighlighted>This is a highlighted caption</CaptionTextHighlighted>
);
