import React, { useState } from "react";
import CaseStudySection1 from "./CaseStudySection1";

import { getPresetsForComponent } from "../../../../.storybook/storybook-utils";

export default {
  title: "CaseStudy Template 1"
};

export const all = () => {
  const [presets, setPresets] = useState([]);
  getPresetsForComponent("CaseStudySection1").then(presetEntries => {
    setPresets(presetEntries);
  });
  return (
    <>
      {presets.map(presetEntry => (
        <CaseStudySection1 {...presetEntry.preset} />
      ))}
      ;
    </>
  );
};
