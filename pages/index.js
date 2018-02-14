import React, {Fragment} from 'react'
import styled from 'styled-components'

import ParallaxHeader from '../components/ParallaxHeader'
import AwardsContainer from '../components/AwardsContainer'
import YoutubeEmbed from '../components/YoutubeEmbed'

import Footer from '../components/Footer'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const BackgroundGradient = styled.div`
  min-height: 600px;
  background: url('/static/images/parallax/background.png') repeat-x top;
`

const BackgroundSun = styled.div`
  background: url('/static/images/parallax/big.png') no-repeat top;
`

const Page = props => (
  <BackgroundGradient>
    <BackgroundSun>{props.children}</BackgroundSun>
  </BackgroundGradient>
)

// -------------------------------------------------------------
// Main page.
// -------------------------------------------------------------

export default () => {
  return (
    <Page>
      <ParallaxHeader />
      <AwardsContainer />
      <YoutubeEmbed code="pziwBxhTpAs" />

      <Footer />
    </Page>
  )
}
