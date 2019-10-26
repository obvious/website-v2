import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF UI Display Light';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Light'), url('fonts/sf-ui-display-light.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'SF UI Display Medium';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Medium'), url('fonts/sf-ui-display-medium.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'SF UI Display Semibold';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Semibold'), url('fonts/sf-ui-display-semibold.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'SF UI Display Bold';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Bold'), url('fonts/sf-ui-display-bold.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'SF UI Display Heavy';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Heavy'), url('fonts/sf-ui-display-heavy.woff') format('woff');
    }
    
    
    @font-face {
        font-family: 'SF UI Display Black';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Black'), url('fonts/sf-ui-display-black.woff') format('woff');
    }
    body {
        margin: 0;
        //font-family: 'SF UI Display Ultralight';
        //font-family: 'SF UI Display Thin';
        //font-family: 'SF UI Display Light';
        //font-family: 'SF UI Display Medium';
        //font-family: 'SF UI Display Semibold';
        //font-family: 'SF UI Display Bold';
        //font-family: 'SF UI Display Heavy';
        font-family: 'SF UI Display Black';
    }
`

export default GlobalStyle;