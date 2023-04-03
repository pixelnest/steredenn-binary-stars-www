import styled from 'styled-components'
import Link from 'next/link'

import YoutubeEmbed from './YoutubeEmbed'

import {trackExternal} from './analytics'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Wrapper = styled.section`
  text-align: center;
  text-transform: uppercase;

  h1 {
    font-size: 1.4em;
  }

  strong {
    color: #ff5757;
  }
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <Wrapper>
      <h1>
        Steredenn: Binary Stars is <strong>OUT NOW</strong> on{' '}
        <strong>Nintendo Switch</strong>, <strong>Steam</strong>,{' '}
        <strong>Xbox One</strong>, <strong>PS4</strong> and <strong>iOS</strong>
      </h1>
      <p>
        Steredenn: Binary Stars is a hugely improved and massively expanded
        version of the{' '}
        <a
          href="http://steredenn.pixelnest.io/classic/"
          onClick={() => trackExternal('Steredenn Classic', 'WEB')}
        >
          original Steredenn
        </a>
        .
      </p>
      <p>Prepare for the ultimate Steredenn experience!</p>
      <YoutubeEmbed code="iBG9yqcXB-4" />
      <p>
        Steredenn: Binary Stars is an award-winning mashup of a classic{' '}
        <strong>shmup</strong> and a <strong>rogue-like</strong>, carved in big
        beautiful pixels, with insane boss battles.
      </p>
      <p>
        <strong>Fly solo or co-op with a friend</strong>, fighting off the worst
        scourges of space in a never-ending struggle for survival.
      </p>
      <p>
        Read the{' '}
        <Link href="/faq">
          <a>exhaustive FAQ</a>
        </Link>{' '}
        about the new features and the thought process behind Steredenn: Binary
        Stars.
      </p>
    </Wrapper>
  )
}
