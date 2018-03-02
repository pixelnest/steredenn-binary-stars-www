import React from 'react'
import styled from 'styled-components'
import {Breakpoints} from '../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const GalleryContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;

  /* Hack to get a gap. */
  max-width: calc((180px * 3) + 2rem + 2rem);

  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${Breakpoints.OneColumnScreenshots}) {
    justify-content: center;

    a {
      margin: 0 2rem;
    }
  }
`

const Thumbnail = styled.a`
  img {
    display: block;

    max-width: 180px;

    margin-bottom: 2rem;

    border: 1px solid black;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);

    transition: all 0.2s ease-out;
  }

  &:hover img {
    transform: scale(1.1);

    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.5);
  }
`

const Element = ({filename, source}) => {
  const {folder, thumbnailFolder, extension, thumbnailExtension} = source

  const image = `${folder}/${filename}.${extension}`
  const thumbnail = `${thumbnailFolder}/${filename}.${thumbnailExtension}`

  const titleLabel = `Image #${filename}`

  return (
    <Thumbnail href={image}>
      <img src={thumbnail} title={titleLabel} alt={titleLabel} />
    </Thumbnail>
  )
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({source}) => {
  const {data} = source

  return (
    <GalleryContainer>
      {data.map(x => <Element key={x} filename={x} source={source} />)}
    </GalleryContainer>
  )
}
