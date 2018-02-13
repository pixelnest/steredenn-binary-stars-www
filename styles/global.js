import {css} from 'styled-components'

// -------------------------------------------------------------
// Styles.
// -------------------------------------------------------------

export const globalStyles = css`
  html {
    /* Border-box by default #1. */
    box-sizing: border-box;

    /* Background #1. */
    background: black; /* Overscroll. */

    /* Font #1. */
    color: black;
    font: 62.5%/1.4 Verdana, sans-serif;
  }

  body {
    /* Full size body. */
    position: relative;
    min-height: 100vh;
    margin: 0;

    /* Background #2. */
    color: white;
    background: black;

    /* Font #2. */
    font-size: 1.5em;
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
    background: tomato;
  }
`
