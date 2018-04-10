import styled from 'styled-components'
import Link from 'next/link'

import YoutubeEmbed from './YoutubeEmbed'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Wrapper = styled.section`
  text-align: center;
  text-transform: uppercase;

  h1 {
    font-size: 1.5em;
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
        Steredenn: Binary Stars is<br />
        <strong>OUT NOW</strong> on <strong>Nintendo Switch</strong> and{' '}
        <strong>Steam</strong>
      </h1>
      <p>
        Steredenn: Binary Stars is a hugely improved and massively expanded
        version of the{' '}
        <a href="http://steredenn.pixelnest.io/classic/">original Steredenn</a>.
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
