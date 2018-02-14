import React, {Fragment} from 'react'
import styled from 'styled-components'

import ParallaxHeader from '../components/ParallaxHeader'
import AwardsContainer from '../components/AwardsContainer'
import YoutubeEmbed from '../components/YoutubeEmbed'

import Footer from '../components/Footer'

// -------------------------------------------------------------
// Main page.
// -------------------------------------------------------------

export default () => {
  return (
    <Fragment>
      <div className="page">
        <ParallaxHeader />
        <AwardsContainer />
        <YoutubeEmbed code="pziwBxhTpAs" />
      </div>

      <Footer />
    </Fragment>
  )
}
