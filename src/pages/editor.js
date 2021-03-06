import React from "react";
import SbEditable from "storyblok-react";
import FindComponent from "../components/find-component";
import config from "../../gatsby-config";
import Nav from "../components/templates/common/Nav";
import { getParam } from "../utils";

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === "gatsby-source-storyblok";
});
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {};

/**
 * Load storyblok JS bridge https://www.storyblok.com/docs/Guides/storyblok-latest-js
 */
const loadStoryblokBridge = function(callback) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`;
  script.onload = callback;
  document.getElementsByTagName("head")[0].appendChild(script);
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
        slug,
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
              // TODO - document these cases where an extra call needs to be made to populate extra data on the story.
              // TODO - write a common function for these extra API calls that can also be consumed by createPages on gatsby-node.js
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

    const sb = window.storyblok;

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
    const { mainNavigation, story } = this.state;
    if (story === null) {
      return null;
    }

    return (
      <SbEditable content={story.content}>
        <div>
          <Nav story={mainNavigation.content} />
          {React.createElement(
            FindComponent(story.content.component, story.full_slug),
            { key: story.content._uid, story }
          )}
        </div>
      </SbEditable>
    );
  }
}

export default StoryblokEntry;
