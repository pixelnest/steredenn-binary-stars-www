import React, {Component, Fragment} from 'react'
import styled, {css} from 'styled-components'

import {Breakpoints} from '../../styles/values'

import withScrollThreshold from '../../hoc/ScrollThreshold'
import {SocialMenu, StoreMenu} from './Menu'

// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const SCROLL_THRESHOLD = 450
const VERTICAL_VIEWPORT_TOO_SMALL_THRESHOLD = 475

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Column = props => {
  const absolute = css`
    position: absolute;
    top: 500px;
  `

  const fixed = css`
    position: fixed;
    top: 50px;
  `

  const Container = styled.div`
    min-width: 200px;

    @media (min-width: ${Breakpoints.ShowVerticalNavigation}) {
      /* Absolute at first, then fixed if the user scrolls past a certain threshold. */
      ${props.fixed ? fixed : absolute};

      /* Right or left of the page? */
      ${props.attachRight ? 'right: 0' : ''};

      margin-bottom: 0;
    }

    /*
      If the viewport is too small, force absolute to allow the user to see the full menu.
      Indeed, with a fixed positioning, if the element is bigger than the viewport,
      some parts may be hidden.
    */
    @media (min-width: ${Breakpoints.ShowVerticalNavigation}) and (max-height: ${VERTICAL_VIEWPORT_TOO_SMALL_THRESHOLD}px) {
      ${absolute};
    }
  `

  return <Container>{props.children}</Container>
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

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
