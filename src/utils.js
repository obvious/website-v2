/**
 * A function to sanitise the response objects of queries of all kinds from the storyblok-source-gatsby plugin
 * @description The function primarily looks for the JSON-stringified `content` key in the response and turns it into an object
 * @param response - The response object from any kind of graphql query from the storyblok-source-gatsby plugin
 * @returns {Object} - Sanitised object with no stringified values
 */
const prepareStoryblokGraphqlResponse = response => {
  /** Declare variable to store the value that will be returned, defaults to null */
  let data = null;

  /** Check if the query is of the type `storyblokEntry` */
  if ("storyblokEntry" in response) {
    data = JSON.parse(response.storyblokEntry.content);
  } else if ("allStoryblokEntry" in response) {
    /** Check if the query is of the type `allStoryblokEntry` */
    data = response.allStoryblokEntry.edges.map(edge => {
      let node = edge.node;
      try {
        if (typeof node.content === "string")
          node.content = JSON.parse(node.content);
        return node;
      } catch (e) {
        throw new Error(e); // error in the above string (in this case, yes)!
      }
    });
  }

  return data;
};

/**
 * A function to group array of objects based on the criteria provided
 * @param list - Array of objects to be grouped by
 * @param criteriaGetter - Function that returns the criteria for the grouping
 * @returns {Object} - Object with criteria keys, with value equal to the corresponding array of objects
 */
const groupBy = (list, criteriaGetter) => {
  const map = new Map();
  list.forEach(item => {
    const key = criteriaGetter(item);
    const publication = map.get(key);
    if (!publication) {
      map.set(key, [item]);
    } else {
      publication.push(item);
    }
  });

  /** Convert the generated map into an object, which will be returned by the function */
  let groupedBy = {};
  for (let [key, val] of map.entries()) {
    groupedBy[key] = val;
  }
  return groupedBy;
};

/**
 * A function to turn an array of articles (with publication object populated in each) into an array of publications each containing metadata and an array of relevant articles
 * @param preparedStoryblokResponse - Sanitised response object from prepareStoryblokGraphqlResponse
 * @see prepareStoryblokGraphqlResponse
 * @returns {any[]} - An array of publications each containing metadata and an array of articles
 */
const prepareArticlesFromMultiplePublications = preparedStoryblokResponse => {
  /** First, group the publications by publication uuids */
  let articlesDataGroupedByPublication = groupBy(
    preparedStoryblokResponse,
    article => article.content.publication.uuid
  );

  /** Convert the grouped object to have publication metadata as well */
  return Object.keys(articlesDataGroupedByPublication).map(key => {
    const articleGroup = articlesDataGroupedByPublication[key];

    /** Clone the publication object to avoid overwriting the original object */
    let publicationData = Object.assign(
      {},
      articleGroup[0].content.publication
    );

    publicationData.articles = articleGroup;
    return publicationData;
  });
};

/**
 * A function to return formatted date string from UTC strings
 * @param utcDateString - A date string in UTC format
 * @param options - An object of options to be passed on to toLocaleDateString()
 * @returns {string} - Formatted date string
 */
const formatDate = (utcDateString, options) => {
  /** Declare default options for when no options are provided */
  const defaultOptions = {
    month: "short",
    day: "2-digit"
  };
  return new Date(utcDateString).toLocaleDateString(
    "en-US",
    options || defaultOptions
  );
};

/**
 * A function that returns a function to feed to Array.sort.
 * Use the returned function to sort an array of objects based on the value of one of the keys.
 * @param property - Property to sort by
 * @returns {function(*, *): number} - A function meant to be provided to Array.sort
 */
const dynamicSort = property => {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

module.exports = {
  prepareStoryblokGraphqlResponse,
  groupBy,
  prepareArticlesFromMultiplePublications,
  formatDate,
  dynamicSort
};
