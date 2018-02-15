import {css} from 'styled-components'

import {Colors} from './values'

// -------------------------------------------------------------
// Styles.
// -------------------------------------------------------------

export const globalStyles = css`
  @font-face {
    font-family: 'Nevis';
    src: url('/static/fonts/nevis.woff2') format('woff2'),
      url('/static/fonts/nevis.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: '04B03';
    src: url('/static/fonts/04b03.woff2') format('woff2'),
      url('/static/fonts/04b03.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    /* Border-box by default #1. */
    box-sizing: border-box;

    /* Overscroll. */
    background: ${Colors.Blacks};

    /* Tweak default font properties. */
    color: black;
    font: 50%/1.4 '04B03', Verdana, sans-serif;
  }

  body {
    /* Full size body. */
    position: relative;
    min-height: 100vh;
    margin: 0;

    color: white;
    background: url('/static/images/Stars.png') ${Colors.Blacks};

    /* Actual default font size. */
    font-size: 2em;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  /* Border-box by default #2. */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Selection. */
  ::selection {
    color: white;
    background: ${Colors.Brand};
  }

  /* Default styles. */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Nevis, Impact, Verdana, sans-serif;
    font-weight: normal;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl {
    margin: 0;
    margin-bottom: 2rem;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`
