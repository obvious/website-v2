import NavItem from "./atoms/NavItem";
import Article from "../templates/article";
import CaseStudy from "../templates/case-study";
import Publication from "../templates/publication";
import PublicationLandingPage from "../templates/publications-landing";
import IndexPage from "../templates";
import ComponentNotFound from './component_not_found'
import Nav from "./templates/common/Nav";
import CaseStudySection1 from "./templates/case-studies/CaseStudySection1";
import CaseStudySection2 from "./templates/case-studies/CaseStudySection2";
import CaseStudySection3 from "./templates/case-studies/CaseStudySection3";

const ComponentList = {
  MainNav: Nav,
  NavItem: NavItem,
  article: Article,
  'case-study': CaseStudy,
  publication: Publication,
  'publications-landing-page': PublicationLandingPage,
  home: IndexPage,
  'template1': CaseStudySection1,
  'template2': CaseStudySection2,
  'template3': CaseStudySection3,
};

const Components = (type, full_slug) => {
  if(type === 'page') {
    type = full_slug
  }
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
};

export default Components