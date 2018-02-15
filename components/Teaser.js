import styled from 'styled-components'

import Link from './Link'
import YoutubeEmbed from './YoutubeEmbed'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Wrapper = styled.section`
  max-width: calc(640px + 6rem);

  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 3rem;

  text-align: center;
  text-transform: uppercase;

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
        Steredenn: Binary Stars is coming on the{' '}
        <strong>Nintendo Switch</strong> on <strong>March 8th, 2018</strong>
      </h1>
      <YoutubeEmbed code="pziwBxhTpAs" />
      <p>
        Prepare for the ultimate Steredenn experience. Hugely improved and
        massively expanded, this is Steredenn: Binary Stars.
      </p>
      <p>
        Find more information about the original Steredenn{' '}
        <Link url="http://steredenn.pixelnest.io/">here</Link>.
      </p>
    </Wrapper>
  )
}
