import styled from 'styled-components'

import Link from '../Link'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({}) => {
  const ItemContainer = styled.li`
    margin-bottom: 1rem;
    padding: 1.3rem 2rem 1rem;

    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0)
    );

    font-size: 1.125em;
    text-transform: uppercase;
    line-height: normal;
  `

  const Title = styled.h2`
    margin-bottom: 1rem;
    padding: 0 2rem;
  `

  const Item = ({url, children}) => (
    <ItemContainer>
      <Link url={url}>{children}</Link>
    </ItemContainer>
  )

  return (
    <nav>
      <Title>Social</Title>
      <ul>
        <Item url="mailto:steredenn@pixelnest.io">Contact</Item>
        <Item url="https://twitter.com/pixelnest/">Twitter</Item>
        <Item url="https://facebook.com/pixelneststudio/">Facebook</Item>
        <Item url="http://pixelnest.io/presskit/steredenn-binary-stars/">
          Presskit
        </Item>
      </ul>
    </nav>
  )
}
