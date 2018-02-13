import {css} from 'styled-components'

import {Colors} from './values'

// -------------------------------------------------------------
// Styles.
// -------------------------------------------------------------

export const globalStyles = css`
  html {
    /* Border-box by default #1. */
    box-sizing: border-box;

    /* Overscroll. */
    background: ${Colors.Background};

    /* Tweak default font properties. */
    color: black;
    font: 50%/1.4 Verdana, sans-serif;
  }

  body {
    /* Full size body. */
    position: relative;
    min-height: 100vh;
    margin: 0;

    color: white;
    background: url('/static/images/Stars.png') ${Colors.Background};

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
`
