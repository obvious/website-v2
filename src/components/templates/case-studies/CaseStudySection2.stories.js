import React, { useState } from "react";
import CaseStudySection2 from "./CaseStudySection2";

import { getPresetsForComponent } from "../../../../.storybook/storybook-utils";

export default {
  title: "CaseStudy Template 2"
};

export const all = () => {
  const [presets, setPresets] = useState([]);
  getPresetsForComponent("CaseStudySection2").then(presetEntries => {
    setPresets(presetEntries);
  });
  return (
    <>
      {presets.map(presetEntry => (
        <CaseStudySection2 {...presetEntry.preset} />
      ))}
      ;
    </>
  );
};
