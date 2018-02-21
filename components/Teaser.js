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
        Steredenn: Binary Stars is coming to <strong>Nintendo Switch</strong> on{' '}
        <strong>March 8th, 2018</strong>
      </h1>
      <YoutubeEmbed code="pziwBxhTpAs" />
      <p>
        Prepare for the ultimate Steredenn experience. Hugely improved and
        massively expanded, this is Steredenn: Binary Stars.
      </p>
      <p>
        Read the <Link href="/faq">exhaustive FAQ</Link> about the new features
        and the thought process behind Steredenn: Binary Stars.
      </p>
      <p>
        Find more information about Steredenn: Classic{' '}
        <a href="http://steredenn.pixelnest.io/classic/">here</a>.
      </p>
    </Wrapper>
  )
}
