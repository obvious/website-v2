const StoryblokClient = require("storyblok-js-client");
const {
  STORYBLOCK_MANAGEMENT_API_OAUTH_TOKEN,
  STORYBLOCK_DELIVERY_API_ACCESS_TOKEN_DRAFT
} = process.env;

exports.handler = async (event, context) => {
  // Uncomment once gitbook webhook is set up
  // if (event.httpMethod !== "POST") {
  //   return {
  //     statusCode: 405,
  //     body: "Hit me with a POST please"
  //   };
  // }

  const SBread = new StoryblokClient({
    accessToken: STORYBLOCK_DELIVERY_API_ACCESS_TOKEN_DRAFT,
    cache: {
      clear: "auto",
      type: "memory"
    }
  });

  const SBwrite = new StoryblokClient({
    oauthToken: STORYBLOCK_MANAGEMENT_API_OAUTH_TOKEN
  });

  const gitbookStories = SBread.get("cdn/stories", {
    starts_with: "gitbook-articles/",
    version: "draft"
  });

  // Get modified gitbook articles and match it to the respective slugs here

  if (gitbookStories.length > 0) {
    // gitbookStories.forEach(story => {
    // Storyblok.put(story.full_slug)
    // })
  }

  return {
    statusCode: 200,
    body: `Hello World`
  };
};
