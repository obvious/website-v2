import React from "react";
import { Divider } from "./Divider";
import { BodyText2 } from "./BodyText";

export default {
  title: "Divider"
};

export const divider = () => (
  <>
    <BodyText2 richText="Just below this is a divider" />
    <Divider />
  </>
);
