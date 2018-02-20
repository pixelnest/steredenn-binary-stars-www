import styled from 'styled-components'

import {Colors} from '../../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export default function Footer() {
  const Wrapper = styled.footer`
    padding: 20rem 2rem 2rem;

    color: ${Colors.Highlights};

    text-align: center;
    text-transform: uppercase;

    ul,
    p {
      margin: 0;
    }

    p {
      font-size: 0.8em;
    }
  `

  const HList = styled.ul`
    display: flex;
    justify-content: center;

    li + li {
      margin-left: 2rem;
    }
  `

  return (
    <Wrapper>
      <HList>
        <li>
          <a href="http://pixelnest.io/">Website</a>
        </li>
        <li>
          <a href="https://twitter.com/pixelnest/">Twitter</a>
        </li>
        <li>
          <a href="https://facebook.com/pixelneststudio/">Facebook</a>
        </li>
      </HList>
      <p>
        (c) 2018 <a href="http://pixelnest.io">Pixelnest Studio</a> - we craft
        games and apps
      </p>
    </Wrapper>
  )
}
