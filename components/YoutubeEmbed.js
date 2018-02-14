import styled from 'styled-components'

export default function YoutubeEmbed({code}) {
  const Player = styled.p`
    text-align: center;

    iframe {
      border: 1px solid black;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
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
