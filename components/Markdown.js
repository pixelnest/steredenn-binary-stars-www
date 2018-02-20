import React, {Fragment} from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import {rgba, tint} from 'polished'

import {linkStyles} from './Link'
import {Colors} from '../styles/values'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const TINTED_COLOR = tint(0.5, Colors.BrandLight)

const Article = styled.article`
  padding: 4rem;

  background: ${rgba(Colors.Brand, 0.1)};
  border: 1px solid ${rgba(Colors.Brand, 0.75)};
  box-shadow: 0 10px 20px 5px ${rgba('black', 0.1)};

  line-height: 1.6;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9em;

  a {
    ${linkStyles};
  }

  /* Titles */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Nevis, Impact, Verdana, sans-serif;
  }

  h1 {
    margin-bottom: 6rem;

    font-size: 2em;
    text-align: center;
  }

  h2 {
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${rgba(Colors.BrandLight, 0.15)};

    color: ${TINTED_COLOR};

    font-size: 1.2em;
  }

  h3 {
    font-size: 1.1em;
  }

  h4 {
  }

  h5 {
  }

  h6 {
  }

  p + h1 {
    margin-top: 10rem;
  }

  p + h2 {
    margin-top: 8rem;
  }

  p + h3 {
    margin-top: 6rem;
  }

  p + h4 {
    margin-top: 5rem;
  }

  p + h5 {
    margin-top: 4rem;
  }

  p + h6 {
    margin-top: 3rem;
  }
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({children}) => {
  return (
    <Article>
      <ReactMarkdown source={children} />
    </Article>
  )
}
