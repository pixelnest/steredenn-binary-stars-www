import React, {Fragment} from 'react'
import styled from 'styled-components'

import Page from '../components/structure/Page'

import Teaser from '../components/Teaser'
import AwardsContainer from '../components/AwardsContainer'
import YoutubeEmbed from '../components/YoutubeEmbed'

import Bandcamp from '../components/Bandcamp'
import Gallery from '../components/Gallery'

import {gifs, screenshots} from '../content/images'

// -------------------------------------------------------------
// Main page.
// -------------------------------------------------------------

export default () => {
  return (
    <Page>
      <Teaser />
      <AwardsContainer />
      <Bandcamp />
      <Gallery source={gifs} totalWidth="556px" elementWidth="270px" />
      <Gallery source={screenshots} totalWidth="572px" elementWidth="180px" />
    </Page>
  )
}
