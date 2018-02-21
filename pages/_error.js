import React, {Fragment} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import {SimplePage} from '../components/structure/Page'
import {Colors} from '../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Container = styled.section`
  text-align: center;
  text-transform: uppercase;

  img {
    margin: 4rem 0;

    /* Hack: the gif is not centered. */
    padding-right: 6rem;
  }

  p:last-of-type {
    color: ${Colors.Midtones};
  }
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <SimplePage>
      <Container>
        <h1>Lost in space</h1>
        <p>It seems that you've lost your way into deep space.</p>

        <p>
          Fortunately, you can still{' '}
          <Link href="/">
            <a>go back to the Steredenn outpost.</a>
          </Link>
        </p>

        <img src="/static/images/pages/error/destroyer.gif" />

        <p>Sector #404</p>
      </Container>
    </SimplePage>
  )
}
