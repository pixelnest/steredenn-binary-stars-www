import styled from 'styled-components'
import {Colors} from '../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export default ({url, children}) => {
  const Item = styled.a`
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

  return <Item href={url}>{children}</Item>
}
