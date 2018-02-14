import styled from 'styled-components'
import {Colors} from '../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

// Parent component, which holds the link.
function Award({site, url, large, children}) {
  const Item = styled.a`
    width: ${large ? '250px' : '150px'};
    padding: 1rem;

    color: white;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;

    transition: transform 0.2s ease-out;

    &:visited {
      color: white;
    }

    &:hover {
      transform: scale(1.15);
    }
  `

  const Text = styled.p`
    color: ${Colors.Brand};
    font-size: ${large ? '1em' : '0.75em'};
  `

  return (
    <Item href={url}>
      {children}
      <Text>{site}</Text>
    </Item>
  )
}

// Big splashy award with an image.
export function BigAward({image, site, url, mainAward}) {
  const DivWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    margin-bottom: 0.5em;
  `

  const Image = styled.img`
    ${props => (mainAward ? 'width: 100%' : 'width: 80%')};
  `

  return (
    <Award site={site} url={url} large>
      <DivWrapper>
        <Image src={image} alt={site} title={site} />
      </DivWrapper>
    </Award>
  )
}

// Small award with the rating instead of an image.
export function SmallAward({rating, site, url}) {
  const RatingText = styled.p`
    margin-bottom: 0.5rem;
    font-size: 1.25em;
  `

  return (
    <Award site={site} url={url}>
      <RatingText>{rating}</RatingText>
    </Award>
  )
}
