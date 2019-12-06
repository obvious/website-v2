import StoryblokClient from "storyblok-js-client";
// Initialize the client with the oauth token
const Storyblok = new StoryblokClient({
  oauthToken: process.env.STORYBOOK_STORYBLOK_OAUTH_TOKEN
});

export const getPresetsForComponent = componentName => {
  return Storyblok.get("spaces/68697/presets/", {})
    .then(response => {
      return response.data.presets.filter(
        item => item.preset.component === componentName
      );
    })
    .catch(error => {
      console.log(error);
    });
};
