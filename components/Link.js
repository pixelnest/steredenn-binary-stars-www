import styled, {css} from 'styled-components'
import {Colors} from '../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export const linkStyles = css`
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

export default ({url, children}) => {
  const Item = styled.a`
    ${linkStyles};
  `

  return <Item href={url}>{children}</Item>
}
