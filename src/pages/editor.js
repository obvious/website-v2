import React from "react";
import Components from "../components/components.js";
import SbEditable from "storyblok-react";
import config from "../../gatsby-config";
import Nav from "../components/templates/common/Nav";

let sbConfigs = config.plugins.filter(item => {
  return item.resolve === "gatsby-source-storyblok";
});
let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {};

const loadStoryblokBridge = function(cb) {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`;
  script.onload = cb;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const getParam = function(val) {
  var result = "";
  var tmp = [];

  window.location.search
    .substr(1)
    .split("&")
    .forEach(function(item) {
      tmp = item.split("=");
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1]);
      }
    });

  return result;
};

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { story: null, mainNavigation: { content: {} } };
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents();
    });
  }

  loadStory(payload) {
    const slug = getParam("path");

    const prepareStory = data => {
      this.setState({ story: data.story });
      this.loadMainNavigation();
    };

    window.storyblok.get(
      {
        slug: slug,
        version: "draft",
        resolve_relations: sbConfig.options.resolveRelations || []
      },
      storyData => {
        if (["home", "publications"].indexOf(slug) > -1) {
          window.storyblok.getAll(
            {
              version: "draft",
              resolve_relations: sbConfig.options.resolveRelations || []
            },
            allStoriesData => {
              if (slug === "home") {
                storyData.story.allStories = allStoriesData.stories;
              }
              if (slug === "publications") {
                storyData.story.articles = allStoriesData.stories.filter(
                  item => item.content.component === "article"
                );
              }
              prepareStory(storyData);
            }
          );
        } else {
          prepareStory(storyData);
        }
      }
    );
  }

  loadMainNavigation() {
    window.storyblok.get(
      {
        slug: `main-navigation`,
        version: "draft"
      },
      data => {
        this.setState({ mainNavigation: data.story });
      }
    );
  }

  initStoryblokEvents() {
    this.loadStory({ storyId: getParam("path") });

    let sb = window.storyblok;

    sb.on(["change", "published"], payload => {
      this.loadStory(payload);
    });

    sb.on("input", payload => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        );
        this.setState({ story: payload.story });
      }
    });

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode();
      }
    });
  }

  render() {
    if (this.state.story == null) {
      return <div></div>;
    }

    let story = this.state.story;
    let mainNavigation = this.state.mainNavigation.content;

    return (
      <SbEditable content={story.content}>
        <div>
          <Nav data={mainNavigation}></Nav>
          {React.createElement(
            Components(story.content.component, story.full_slug),
            { key: story.content._uid, data: story }
          )}
        </div>
      </SbEditable>
    );
  }
}

export default StoryblokEntry;
