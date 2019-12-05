/**
 * Use this component to map component names on Storyblok to component names on the app.
 * TODO - Have common naming conventions between the Storyblok API and the app.
 * TODO - Fix circular dependency with CaseStudy page Template
 */

import NavItem from "./atoms/NavItem";
import Article from "../templates/article";
import CaseStudy from "../templates/case-study";
import Publication from "../templates/publication";
import PublicationLandingPage from "../templates/publications-landing";
import IndexPage from "../templates";
import ComponentNotFound from "./component-not-found";
import Nav from "./templates/common/Nav";
import CaseStudySection1 from "./templates/case-studies/CaseStudySection1";
import CaseStudySection2 from "./templates/case-studies/CaseStudySection2";
import CaseStudySection3 from "./templates/case-studies/CaseStudySection3";

const ComponentList = {
  MainNav: Nav,
  NavItem,
  article: Article,
  "case-study": CaseStudy,
  publication: Publication,
  "publications-landing-page": PublicationLandingPage,
  home: IndexPage,
  CaseStudySection1,
  CaseStudySection2,
  CaseStudySection3
};

const FindComponent = (type, fullSlug) => {
  let computedType = type;
  if (type === "page") {
    computedType = fullSlug;
  }
  if (typeof ComponentList[computedType] === "undefined") {
    return ComponentNotFound;
  }
  return ComponentList[computedType];
};

export default FindComponent;
