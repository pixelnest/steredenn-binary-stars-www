import React, {Fragment} from 'react'
import styled, {css} from 'styled-components'

import {Breakpoints} from '../../styles/values'

import {SocialMenu, StoreMenu} from './Menu'

import Header from './Header'
import Footer from './Footer'
import {position} from 'polished'

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

const Column = props => {
  /* Absolute at first, then fixed after a certain threshold. */
  let positioning = ''
  if (props.fixed) {
    positioning = css`
      position: fixed;
      top: 50px;
    `
  } else {
    positioning = css`
      position: absolute;
      top: 500px;
    `
  }

  const Container = styled.section`
    min-width: 200px;

    /* Absolute at first, then fixed after a certain threshold. */
    @media (min-width: ${Breakpoints.Menu}) {
      ${positioning};
      ${props.attachRight ? 'right: 0' : ''};

      margin-bottom: 0;
    }

    /* If the viewport is too small, force absolute */
    @media (min-width: ${Breakpoints.Menu}) and (max-height: 400px) {
      position: absolute;
      top: 500px;
    }
  `

  return <Container>{props.children}</Container>
}

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggle: false}
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const toggle = window.scrollY > 450
    this.setState({toggle})
  }

  render() {
    return (
      <Fragment>
        <Column fixed={this.state.toggle}>
          <SocialMenu />
        </Column>
        <Column fixed={this.state.toggle} attachRight>
          <StoreMenu />
        </Column>
      </Fragment>
    )
  }
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({children}) => {
  return (
    <Decorator>
      <Header />
      <Navigation />
      <main role="main">{children}</main>
      <Footer />
    </Decorator>
  )
}
