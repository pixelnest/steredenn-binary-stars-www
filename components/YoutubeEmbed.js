import styled from 'styled-components'

export default function YoutubeEmbed({code}) {
  const Player = styled.p`
    text-align: center;

    iframe {
      border: 1px solid black;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
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
