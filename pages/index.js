import React, {Fragment} from 'react'
import styled from 'styled-components'

import Page from '../components/structure/Page'

import Teaser from '../components/Teaser'
import AwardsContainer from '../components/AwardsContainer'
import YoutubeEmbed from '../components/YoutubeEmbed'

import Bandcamp from '../components/Bandcamp'
import Gallery from '../components/Gallery'

import {screenshots} from '../content/images'

// -------------------------------------------------------------
// Main page.
// -------------------------------------------------------------

export default () => {
  return (
    <Page>
      <Teaser />
      <AwardsContainer />
      <Bandcamp />
      <Gallery source={screenshots} />
    </Page>
  )
}
