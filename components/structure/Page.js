import React, {Fragment} from 'react'
import styled from 'styled-components'

import ChangeMeta from './ChangeMeta'

import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const META_TITLE = 'Steredenn: Binary Stars'
const META_DESCRIPTION =
  'Steredenn is a space shooter-roguelike video game made by Pixelnest Studio.'

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

const MainContainer = styled.main`
  max-width: calc(640px + 6rem);

  margin: 0 auto;
  padding: 3rem;
`

const Decorator = props => (
  <Fragment>
    <BackgroundGradient>
      <BackgroundSun>{props.children}</BackgroundSun>
    </BackgroundGradient>
    <div id="overlays" />
  </Fragment>
)

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export const SimplePage = ({title, description, children}) => {
  return (
    <Decorator>
      <ChangeMeta title={META_TITLE} description={META_DESCRIPTION} />
      <Header hideBanner />
      <MainContainer role="main">{children}</MainContainer>
      <Footer />
    </Decorator>
  )
}

export default ({children}) => {
  return (
    <Decorator>
      <ChangeMeta title={META_TITLE} description={META_DESCRIPTION} />
      <Header />
      <Navigation />
      <MainContainer role="main">{children}</MainContainer>
      <Footer />
    </Decorator>
  )
}
