import { createGlobalStyle } from 'styled-components'
import fonts from "../util/font";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF UI Display Light';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Light'), url(${fonts.SFLight}) format('woff');
        font-display: block;
    }
    
    
    @font-face {
        font-family: 'SF UI Display Medium';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Medium'), url(${fonts.SFMedium}) format('woff');
        font-display: block;
    }
    
    
    @font-face {
        font-family: 'SF UI Display Semibold';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Semibold'), url(${fonts.SFSemibold}) format('woff');
        font-display: block;
    }
    
    
    @font-face {
        font-family: 'SF UI Display Bold';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Bold'), url(${fonts.SFBold}) format('woff');
        font-display: block;
    }
    
    
    @font-face {
        font-family: 'SF UI Display Heavy';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Heavy'), url(${fonts.SFHeavy}) format('woff');
        font-display: block;
    }
    
    
    @font-face {
        font-family: 'SF UI Display Black';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Black'), url(${fonts.SFBlack}) format('woff');
        font-display: block;
    }
    
     @font-face {
        font-family: 'SF UI Display Thin';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Thin'), url(${fonts.SFThin}) format('woff');
        font-display: block;
    }
    
     @font-face {
        font-family: 'SF UI Display Ultralight';
        font-style: normal;
        font-weight: normal;
        src: local('SF UI Display Ultralight'), url(${fonts.SFUltralight}) format('woff');
        font-display: block;
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