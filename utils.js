const _ = require('lodash');

const recursivelyPrepareStoryblokStory = (story) => {
    if(story.type && story.type === 'doc') {
        return story;
    }

    if(_.isArray(story)) {
        return _.map(story, recursivelyPrepareStoryblokStory)
    }

    // Hack for richText fields


    let preparedStory = {};
    let keys = _.keys(story);
    keys.forEach(key => {
        let currentKeyValue = story[key];
        let modifiedKeyValue = null;

        if(_.isObjectLike(currentKeyValue)){
            if (_.isArray(currentKeyValue) && currentKeyValue.length === 1) {
                modifiedKeyValue = recursivelyPrepareStoryblokStory(currentKeyValue[0]);
            } else {
                modifiedKeyValue = recursivelyPrepareStoryblokStory(currentKeyValue)
            }
        }
        else {
            modifiedKeyValue = currentKeyValue;
        }
        preparedStory[key] = modifiedKeyValue;
    });

    return preparedStory;
};

const prepeareStoryblokGraphqlResponse = (response) => {
    if(response) {
        try {
             return JSON.parse(response.storyblokEntry.content);
        } catch(e) {
            throw new Error(e); // error in the above string (in this case, yes)!
        }
    }



};

module.exports = {
    recursivelyPrepareStoryblokStory,
    prepeareStoryblokGraphqlResponse
};