import React, {Fragment} from 'react'
import styled from 'styled-components'

import Page from '../components/structure/Page'

import AwardsContainer from '../components/AwardsContainer'
import YoutubeEmbed from '../components/YoutubeEmbed'

// -------------------------------------------------------------
// Main page.
// -------------------------------------------------------------

export default () => {
  return (
    <Page>
      <AwardsContainer />
      <YoutubeEmbed code="pziwBxhTpAs" />
    </Page>
  )
}
