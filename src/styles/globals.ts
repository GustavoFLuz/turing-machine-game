import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Ubuntu Mono';
        src: url('/fonts/UbuntuMono-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Ubuntu Mono';
        src: url('/fonts/UbuntuMono-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Ubuntu Mono';
        src: url('/fonts/UbuntuMono-Italic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
    }
    @font-face {
        font-family: 'Ubuntu Mono';
        src: url('/fonts/UbuntuMono-BoldItalic.ttf') format('truetype');
        font-weight: bold;
        font-style: italic;
    }

    body {
        font-family: 'Ubuntu Mono', monospace;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;