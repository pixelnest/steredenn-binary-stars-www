import React, {Fragment} from 'react'
import styled from 'styled-components'

import ChangeMeta from '../components/structure/ChangeMeta'
import Page from '../components/structure/Page'

import Gallery, {Thumbnail} from '../components/Gallery'

import {Colors, Breakpoints} from '../styles/values'
import {wallpapers} from '../content/images'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Title = styled.h1`
  margin-bottom: 6rem;
  text-align: center;
`

const HeroGallery = styled.div`
  display: flex;

  @media (max-width: 675px) {
    flex-wrap: wrap;
    justify-content: space-around;

    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;

    a:first-of-type {
      order: 1;
    }

    a,
    img {
      max-width: 100%;
    }
  }

  @media (min-width: 675px) {
    flex-wrap: nowrap;
    justify-content: center;
    max-width: 100%;

    img {
      height: 214px;
    }

    a + a {
      margin-left: 2rem;
    }
  }
`

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

export default () => {
  const title = 'Wallpapers — Steredenn: Binary Stars'
  const createPath = x => `/static/images/wallpapers/${x}`

  return (
    <Fragment>
      <Page>
        <Title>Wallpapers</Title>
        <HeroGallery>
          <Thumbnail href={createPath('art-iphone.png')}>
            <img
              src={createPath('thumbs-50/art-iphone.jpg')}
              alt="Steredenn Art - iPhone"
              title="Steredenn Art - iPhone"
            />
          </Thumbnail>
          <Thumbnail href={createPath('art.png')}>
            <img
              src={createPath('thumbs-50/art.jpg')}
              alt="Steredenn Art"
              title="Steredenn Art"
            />
          </Thumbnail>
          <Thumbnail href={createPath('art-iphone-x.png')}>
            <img
              src={createPath('thumbs-50/art-iphone-x.jpg')}
              alt="Steredenn Art - iPhone X"
              title="Steredenn Art - iPhone X"
            />
          </Thumbnail>
        </HeroGallery>
        <Gallery source={wallpapers} totalWidth="632px" elementWidth="200px" />
      </Page>
      <ChangeMeta
        title={title}
        description={'Downloadable Steredenn Wallpapers Gallery'}
      />
    </Fragment>
  )
}
