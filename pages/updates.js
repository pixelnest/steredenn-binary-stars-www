import React, {Fragment} from 'react'
import styled from 'styled-components'

import ChangeMeta from '../components/structure/ChangeMeta'
import Page from '../components/structure/Page'
import Markdown from '../components/Markdown'

import content from '../content/updates'

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

export default () => {
  const title = 'Changelogs — Steredenn: Binary Stars'
  const [first, _] = content

  return (
    <Fragment>
      <Page>
        {content.map(({tag, text}) => {
          const stringTag = tag.replace(/\./gi, '_')
          return (
            <Markdown key={stringTag} id={'update_' + stringTag}>
              {text}
            </Markdown>
          )
        })}
      </Page>
      <ChangeMeta title={title} description={first.description} />
    </Fragment>
  )
}
