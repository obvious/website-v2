const prepareStoryblokGraphqlResponse = (response) => {
    let data;
    if('storyblokEntry' in response) {
        data = JSON.parse(response.storyblokEntry.content);
    }
    else if('allStoryblokEntry' in response) {
        data = response.allStoryblokEntry.edges.map(edge => {
            let node = edge.node;
            try {
                if(typeof node.content === 'string')
                    node.content = JSON.parse(node.content);
                return node;
            } catch(e) {
                throw new Error(e); // error in the above string (in this case, yes)!
            }

        });
    }
    else {
        data = {content: `{}` }
    }
    if(response) {
        return data;

    }
};

const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    let groupedBy = {};
    for(let [key,val] of map.entries()){
        groupedBy[key]= val;
    }
    return groupedBy;
};

const prepareArticlesFromMultipleCollections = (preparedStoryblokResponse) => {
    let articleCollectionsDataGroupedByCollection = groupBy(preparedStoryblokResponse, article => article.content.collection.uuid);
    console.log(articleCollectionsDataGroupedByCollection)

    return Object.keys(articleCollectionsDataGroupedByCollection).map(key => {
        const articleGroup = articleCollectionsDataGroupedByCollection[key];
        let collectionData = Object.assign({}, articleGroup[0].content.collection);
        collectionData.articles = articleGroup;
        return collectionData;
    });
};


module.exports = {
    prepareStoryblokGraphqlResponse,
    groupBy,
    prepareArticlesFromMultipleCollections
};