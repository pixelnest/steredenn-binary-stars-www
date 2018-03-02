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
  max-width: ${props => props.width};

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

    max-width: ${props => props.width};

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

const Element = ({filename, source, width}) => {
  const {folder, thumbnailFolder, extension, thumbnailExtension} = source

  const image = `${folder}/${filename}.${extension}`
  const thumbnail = `${thumbnailFolder}/${filename}.${thumbnailExtension}`

  const label = `${source.label} #${filename}`

  const createElement = src => (
    <Thumbnail href={image} width={width}>
      <img src={src} title={label} alt={label} />
    </Thumbnail>
  )

  // Should lazy load?
  if (source.lazyLoad) {
    return (
      <LazyLoader
        render={shouldLoad =>
          createElement(shouldLoad ? thumbnail : source.lazyLoadPlaceholder)
        }
      />
    )
  }

  return createElement(thumbnail)
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({source, totalWidth, elementWidth}) => {
  const {data} = source

  return (
    <GalleryContainer width={totalWidth}>
      {data.map(x => (
        <Element key={x} filename={x} source={source} width={elementWidth} />
      ))}
    </GalleryContainer>
  )
}
