import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url('../assets/fonts/Lato-Regular.woff2') format('woff2'),
    url('../assets/fonts/Lato-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato';
    src: url('../assets/fonts/Lato-Regular.woff2') format('woff2'),
    url('../assets/fonts/Lato-Regular.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/Inter-Thin.woff2') format('woff2'),
    url('../assets/fonts/Inter-Thin.woff') format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/Inter-Light.woff2') format('woff2'),
    url('../assets/fonts/Inter-Light.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/Inter-Bold.woff2') format('woff2'),
    url('../assets/fonts/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/Inter-ExtraBold.woff2') format('woff2'),
    url('../assets/fonts/Inter-ExtraBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;

export default FontStyles;
