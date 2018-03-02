import {Component, Fragment} from 'react'
import styled from 'styled-components'

import {createShadowBlockMixin} from '../styles/mixins'

// -------------------------------------------------------------
// Values.
// -------------------------------------------------------------

const STYLES = {
  display: 'block',
  border: 'none',
  width: '100%',
  height: '120px'
}

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Container = styled.div`
  max-width: 80%;
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;

  ${createShadowBlockMixin()};
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <Container>
      <iframe
        style={STYLES}
        src="https://bandcamp.com/EmbeddedPlayer/album=1320691052/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/transparent=true/"
        seamless
      />
    </Container>
  )
}
