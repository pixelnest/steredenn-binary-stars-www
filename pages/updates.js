import React, {Fragment} from 'react'
import styled from 'styled-components'

import Page from '../components/structure/Page'

import Markdown from '../components/Markdown'

import content from '../content/updates'

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

export default () => {
  return (
    <Page>
      {Object.entries(content).map(([key, val]) => {
        const stringKey = key.replace(/\./gi, '_')
        return (
          <Markdown key={stringKey} id={'update_' + stringKey}>
            {val}
          </Markdown>
        )
      })}
    </Page>
  )
}
