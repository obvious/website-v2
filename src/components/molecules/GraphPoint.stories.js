import React from "react";
import { GraphPoint } from "./GraphPoint";

export default {
  title: "Graph Point"
};

const GraphData = {
  label: [{ text: "Caption" }],
  specialLabel: []
};

const GraphDataWithHighlight = {
  label: [
    {
      text: "Caption"
    }
  ],
  specialLabel: [
    {
      Text: "Highlighted Caption"
    }
  ]
};

export const regular = () => <GraphPoint {...GraphData} />;
export const withHighlight = () => <GraphPoint {...GraphDataWithHighlight} />;
