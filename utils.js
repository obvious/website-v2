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
    prepeareStoryblokGraphqlResponse
};