import React from "react";
import {
  HeaderText1,
  HeaderText2,
  HeaderText3,
  HeaderText4,
  HeaderText5,
  HeaderText6
} from "./HeaderText";

export default {
  title: "Headers",
  parameters: {
    componentSubtitle: "All the titles available for use in the project"
  }
};

export const h1 = () => <HeaderText1>This is an H1</HeaderText1>;

export const h2 = () => <HeaderText2>This is an H2</HeaderText2>;

export const h3 = () => <HeaderText3>This is an H3</HeaderText3>;

export const h4 = () => <HeaderText4>This is an H4</HeaderText4>;

export const h5 = () => <HeaderText5>This is an H5</HeaderText5>;

export const h6 = () => <HeaderText6>This is an H6</HeaderText6>;
