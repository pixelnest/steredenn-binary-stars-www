import styled from 'styled-components'
import {Colors} from '../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

function Link({text, url}) {
  const LinkStyled = styled.a`
    color: ${Colors.Brand};
  `

  return (
    <p>
      <LinkStyled href={url}>{text}</LinkStyled>
    </p>
  )
}

// Parent component, which holds the link.
function Award(props) {
  const Item = styled.div`
    width: ${props.large ? '250px' : '150px'};
    padding: 1rem;
    text-align: center;
  `

  return (
    <Item>
      {props.children}
      <Link text={props.site} url={props.url} />
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
  return (
    <Award site={site} url={url}>
      <p>{rating}</p>
    </Award>
  )
}
