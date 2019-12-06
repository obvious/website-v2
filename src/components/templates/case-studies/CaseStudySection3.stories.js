import React, { useState } from "react";
import CaseStudySection3 from "./CaseStudySection3";

import { getPresetsForComponent } from "../../../../.storybook/storybook-utils";

export default {
  title: "CaseStudy Template 3"
};

export const all = () => {
  const [presets, setPresets] = useState([]);
  getPresetsForComponent("CaseStudySection3").then(presetEntries => {
    setPresets(presetEntries);
  });
  return (
    <>
      {presets.map(presetEntry => (
        <CaseStudySection3 {...presetEntry.preset} />
      ))}
      ;
    </>
  );
};
