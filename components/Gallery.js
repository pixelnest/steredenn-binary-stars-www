import React, {Component} from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'
import {Colors, Breakpoints} from '../styles/values'

import LazyLoader from './LazyLoader'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const GalleryContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;

  /* Hack to get a gap. */
  max-width: ${props => props.totalWidth};

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

    max-width: ${props => props.elementWidth};

    margin-bottom: 2rem;

    border: 1px solid black;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    background: ${rgba(Colors.Brand, 0.1)};

    transition: all 0.2s ease-out;
  }

  &:hover img {
    transform: scale(1.1);

    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.5);
  }
`

const Element = ({filename, source, elementWidth}) => {
  const {
    folder,
    extension,
    thumbnailFolder,
    thumbnailExtension,
    placeholderFolder,
    placeholderExtension
  } = source

  const image = `${folder}/${filename}.${extension}`
  const thumbnail = `${thumbnailFolder}/${filename}.${thumbnailExtension}`
  const placeholder = `${placeholderFolder}/${filename}.${placeholderExtension}`

  const label = `${source.label} #${filename}`

  const createImage = src => <img src={src} title={label} alt={label} />

  return (
    <Thumbnail href={image} elementWidth={elementWidth}>
      {source.lazyLoad ? (
        <LazyLoader
          render={shouldLoad =>
            createImage(shouldLoad ? thumbnail : placeholder)
          }
        />
      ) : (
        createImage(thumbnail)
      )}
    </Thumbnail>
  )
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({source, totalWidth, elementWidth}) => {
  const {data} = source

  return (
    <GalleryContainer totalWidth={totalWidth}>
      {data.map(x => (
        <Element
          key={x}
          filename={x}
          source={source}
          elementWidth={elementWidth}
        />
      ))}
    </GalleryContainer>
  )
}
