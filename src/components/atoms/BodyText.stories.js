import React from "react";
import { BodyText1, BodyText2, BodyText3, BodyText5 } from "./BodyText";

export default {
  title: "Body Text"
};

export const bigText = () => <BodyText1 richText="This is a large BodyText1" />;

export const med = () => <BodyText2 richText="This is a BodyText2" />;

export const sm0l = () => <BodyText3 richText="This is a BodyText3" />;

export const vsmol = () => <BodyText5 richText="This is a BodyText5" />;
