import React, {Fragment} from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

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
  <BackgroundGradient>
    <BackgroundSun>{props.children}</BackgroundSun>
  </BackgroundGradient>
)

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export const SimplePage = ({children}) => {
  return (
    <Decorator>
      <Header hideBanner />
      <MainContainer role="main">{children}</MainContainer>
      <Footer />
    </Decorator>
  )
}

export default ({children}) => {
  return (
    <Decorator>
      <Header />
      <Navigation />
      <MainContainer role="main">{children}</MainContainer>
      <Footer />
    </Decorator>
  )
}
