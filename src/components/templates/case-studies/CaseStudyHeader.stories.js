import React, { useState } from "react";
import CaseStudyHeader from "./CaseStudyHeader";

import { getPresetsForComponent } from "../../../../.storybook/storybook-utils";

export default {
  title: "CaseStudy Header"
};

export const all = () => {
  const [presets, setPresets] = useState([]);
  getPresetsForComponent("CaseStudyHeader").then(presetEntries => {
    setPresets(presetEntries);
  });
  return (
    <>
      {presets.map(presetEntry => (
        <CaseStudyHeader {...presetEntry.preset} />
      ))}
      ;
    </>
  );
};
