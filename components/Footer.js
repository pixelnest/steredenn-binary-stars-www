import styled from 'styled-components'

import {Colors} from '../styles/values'
import Link from './Link'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export default function Footer() {
  const Wrapper = styled.footer`
    padding-top: 20rem;

    color: ${Colors.Highlights};

    text-align: center;
    text-transform: uppercase;

    ul {
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
          <Link url="http://pixelnest.io/">Website</Link>
        </li>
        <li>
          <Link url="https://twitter.com/pixelnest/">Twitter</Link>
        </li>
        <li>
          <Link url="https://facebook.com/pixelneststudio/">Facebook</Link>
        </li>
      </HList>
      <p>
        (c) 2018 <Link url="http://pixelnest.io">Pixelnest Studio</Link> - we
        craft games and apps
      </p>
    </Wrapper>
  )
}
