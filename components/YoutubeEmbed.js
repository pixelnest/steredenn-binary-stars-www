import styled from 'styled-components'

import {createShadowBlockMixin} from '../styles/mixins'

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

export default function YoutubeEmbed({code}) {
  const Player = styled.p`
    text-align: center;

    iframe {
      ${createShadowBlockMixin()};
    }

    @media (max-width: 800px) {
      iframe {
        width: 540px;
        height: 300px;
      }
    }

    @media (max-width: 600px) {
      iframe {
        width: 80%;
        height: 240px;
      }
    }
  `

  return (
    <Player>
      <iframe
        width="640"
        height="360"
        src={'https://www.youtube.com/embed/' + code + '?rel=0'}
        frameBorder="0"
        allowFullScreen
      />
    </Player>
  )
}
