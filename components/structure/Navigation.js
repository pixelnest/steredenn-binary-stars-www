import React, {Component, Fragment} from 'react'
import styled, {css} from 'styled-components'

import {Breakpoints} from '../../styles/values'

import withScrollThreshold from '../ScrollThreshold'
import {SocialMenu, StoreMenu} from './Menu'

// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const SCROLL_THRESHOLD = 450

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

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

  const Container = styled.div`
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

export default withScrollThreshold(
  class Navigation extends Component {
    render() {
      const shouldBeFixed = this.props.scrolledPastThreshold
      return (
        <Fragment>
          <Column fixed={shouldBeFixed}>
            <SocialMenu />
          </Column>
          <Column fixed={shouldBeFixed} attachRight>
            <StoreMenu />
          </Column>
        </Fragment>
      )
    }
  },
  SCROLL_THRESHOLD
)
