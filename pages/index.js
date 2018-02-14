import React, {Fragment} from 'react'
import styled from 'styled-components'

import ParallaxHeader from '../components/ParallaxHeader'
import AwardsContainer from '../components/AwardsContainer'
import YoutubeEmbed from '../components/YoutubeEmbed'

// -------------------------------------------------------------
// Main page.
// -------------------------------------------------------------

export default () => {
  return (
    <div className="page">
      <ParallaxHeader />
      <AwardsContainer />
      <YoutubeEmbed code="pziwBxhTpAs" />
    </div>
  )
}
