import styled, {css} from 'styled-components'
import {Colors} from '../styles/values'

// -------------------------------------------------------------
// Styles.
// -------------------------------------------------------------

export default css`
  color: ${Colors.Brand};
  transition: color 0.1s ease-in;

  text-decoration: none;

  &:hover {
    color: ${Colors.BrandLight};
  }

  &:active,
  &:focus {
    color: ${Colors.BrandDark};
  }
`
