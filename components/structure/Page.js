import React, {Fragment} from 'react'
import styled from 'styled-components'

import Menu from './Menu'

import Header from './Header'
import Footer from './Footer'

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

const Decorator = props => (
  <BackgroundGradient>
    <BackgroundSun>{props.children}</BackgroundSun>
  </BackgroundGradient>
)

const LeftNav = styled.div`
  margin-bottom: 4rem;
  min-width: 200px;

  @media (min-width: 1000px) {
    position: fixed;
    margin-button: 0;
  }
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({children}) => {
  return (
    <Decorator>
      <Header />
      <LeftNav>
        <Menu />
      </LeftNav>
      <main role="main">{children}</main>
      <Footer />
    </Decorator>
  )
}
