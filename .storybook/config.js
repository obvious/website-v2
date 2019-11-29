import React from "react";
import {addDecorator, configure} from "@storybook/react"
import { action } from "@storybook/addon-actions"
import GlobalStyle from "../src/styled/GlobalStyles";
import {ThemeProvider} from "styled-components";
import theme from "../src/styled/theme";


// Make theme available to all components
addDecorator(story => <ThemeProvider theme={theme}> <GlobalStyle/> {story()} </ThemeProvider>)

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}
