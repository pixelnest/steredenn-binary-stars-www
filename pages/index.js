import React, {Fragment} from 'react'
import styled from 'styled-components'

import ParallaxHeader from '../components/ParallaxHeader'
import AwardsContainer from '../components/AwardsContainer'

// -------------------------------------------------------------
// Main page.
// -------------------------------------------------------------

export default () => {
  return (
    <div class="page">
      <ParallaxHeader />
      <AwardsContainer />
    </div>
  )
}
