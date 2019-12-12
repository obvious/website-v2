const StoryblokClient = require("storyblok-js-client");
const Octokit = require("@octokit/rest");

// Environment variables defined on Netlify
const {
  STORYBLOCK_MANAGEMENT_API_OAUTH_TOKEN,
  STORYBLOCK_DELIVERY_API_ACCESS_TOKEN_DRAFT,
  GITHUB_PERSONAL_ACCESS_TOKEN_TANVI
} = process.env;

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Hit me with a POST please"
    };
  }

  //Initialise the read api for storyblok
  const SBRead = new StoryblokClient({
    accessToken: STORYBLOCK_DELIVERY_API_ACCESS_TOKEN_DRAFT,
    cache: {
      clear: "auto",
      type: "memory"
    }
  });

  // Initialise the write api for storyblok
  const SBWrite = new StoryblokClient({
    oauthToken: STORYBLOCK_MANAGEMENT_API_OAUTH_TOKEN
  });

  //Get stories existing on storyblok with the gitbook-articles content-type
  const gitbookStories = SBRead.get("cdn/stories", {
    starts_with: "gitbook-articles/",
    version: "draft"
  });

  // Get all articles from gitbook
  const octokit = new Octokit({
    auth: GITHUB_PERSONAL_ACCESS_TOKEN_TANVI,
    userAgent: "obvious-website"
  });

  const data = await octokit.repos.get({
    owner: "obvious",
    repo: "handbook"
  });

  console.log(data);
  // Find their IDs
  // Compare their IDs to IDs existing on storyblok
  // Update all articles with matching IDs
  // IDs that are unmatched from storyblok remain where they are, flagged somehow
  // Lots of IDs will remain unmatched on the gitbook side of things

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
