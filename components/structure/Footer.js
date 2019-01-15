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

    p.add-space {
      margin-bottom: 2rem;
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

  const Ratings = styled.img`
    width: 234px;
    height: 73px;
  `

  return (
    <Wrapper>
      <p className="add-space">
        <Ratings
          src="/static/images/pages/ratings.png"
          title="ESRB 10+ and PEGI 7"
          alt="ESRB 10+ and PEGI 7"
        />
      </p>
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
        <li>
          <a href="https://instagram.com/pixelneststudio/">Instagram</a>
        </li>
      </HList>
      <p>
        (c) 2019 <a href="http://pixelnest.io">Pixelnest Studio</a> - we craft
        games and apps
      </p>
    </Wrapper>
  )
}
