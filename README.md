# Obvious

An up-to-date version of everything on the `master` branch of this repository is available for preview on [not.obvious.in](not.obvious.in). Give it a whirl and leave us a star, slack us, or write in to [contact@obvious.in](mailto:contact@obvious.in) with feedback!

## 🚀 Quick start

1.  **Clone the project.**

    ```shell
    git clone https://github.com/obvious/website-v2.git
    ```

1.  **Install all the relevant packages.**

    Navigate into your new site’s directory and install the relevant packages using your favorite package manager. We use `npm`.

    ```shell
    cd website-v2/
    npm i
    ```

1.  **Run the server.**

    ```shell script
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Our site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `website-v2` directory in your code editor of choice. Save your changes and the browser will update in real time!

## Frequently used terms

- `story` - used to denote singular data entries fetched from the _Storyblok_ API. Usage of `story` can be found primarily on

  1. page-level components
  2. the live preview editor page
  3. and _Gatsby createPage_ API (gatsby-node.js)

- `[filename].stories.js and the stories/ directory` - These are visual representations of various states of each component, intended to be served as part of a visual directory of all components. This visual directory is a _[Storybook](https://storybook.js.org/)_ app.
  IMPORTANT NOTE: all things _Storybook_ need to be renamed to `renders` instead of `stories` to avoid confusion with the similarly named _Storyblok_ entries.

## 🧐 What's inside?

A quick look at some additional things we are using within the project:

1. **ESLint**

   Warns us about unsustainable javascript. We use [Airbnb's configuration](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/README.md) for linting. It runs along with our `gatsby develop`, and also integrates with our editors.

1. **Prettier**

   Formats our code for us. Prettier is set to run automatically on the code you are about to commit, just before committing it. There is no need to run a command to prettify files, but if you want to do a specific file you could use `npx prettier --write [LINK_TO_FILE(S)_HERE]`.

1. **Husky**

   Easily set up pre-commit hooks.

1. **Lint-staged**

   Lint only staged files.

## Notes

`npm run patch` is a temporal fix used for building our lambda functions until https://github.com/gr2m/universal-user-agent/issues/23 is fixed.
