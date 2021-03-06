import React from "react";
import FindComponent from "../components/find-component";
import Nav from "../components/templates/common/Nav";

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null;
    }

    return StoryblokEntry.prepareStory(props);
  }

  static prepareStory(props) {
    const mainNavigation = { ...props.pageContext.mainNavigation };
    mainNavigation.content = JSON.parse(mainNavigation.content);

    const story = { ...props.pageContext.story };

    try {
      story.content = JSON.parse(story.content);
    } catch (e) {
      console.log(e);
    }

    /**
     * For homepage
     */
    if (story.full_slug === "home") {
      story.allStories = Object.values(
        story.allStories.map(item => {
          try {
            item.node.content = JSON.parse(item.node.content);
          } catch (e) {
            console.log(e);
          }
          return item.node;
        })
      );
    }

    /**
     * For publications landing page
     */
    if (story.full_slug === "publications") {
      story.articles = Object.values(
        story.articles.map(item => {
          try {
            item.node.content = JSON.parse(item.node.content);
          } catch (e) {
            console.log(e);
          }
          return item.node;
        })
      );
    }

    return { story, mainNavigation };
  }

  constructor(props) {
    super(props);

    this.state = StoryblokEntry.prepareStory(props);
  }

  render() {
    const { story } = this.state;
    const { mainNavigation } = this.state;
    return (
      <div>
        <Nav story={mainNavigation.content}></Nav>
        {React.createElement(
          FindComponent(story.content.component, story.full_slug),
          { key: story.content._uid, story }
        )}
      </div>
    );
  }
}

export default StoryblokEntry;
