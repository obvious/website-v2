const prepeareStoryblokGraphqlResponse = (response) => {
    let data;
    if('storyblokEntry' in response) {
        data = JSON.parse(response.storyblokEntry.content);
    }
    else if('allStoryblokEntry' in response) {
        data = response.allStoryblokEntry.edges.map(edge => {
            let node = edge.node;
            node.content = JSON.parse(node.content)
            return node;
        });
    }
    else {
        data = {content: `{}` }
    }
    if(response) {
        try {
             return data;
        } catch(e) {
            throw new Error(e); // error in the above string (in this case, yes)!
        }
    }
};

module.exports = {
    prepeareStoryblokGraphqlResponse
};