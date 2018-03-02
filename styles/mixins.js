import {css} from 'styled-components'

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

export const createShadowBlockMixin = (blackOpacity = 0.5) => css`
  border: 1px solid black;
  box-shadow: 0 0 1rem rgba(0, 0, 0, ${blackOpacity});
`
