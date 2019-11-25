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
