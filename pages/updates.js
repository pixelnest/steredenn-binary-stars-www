import React, {Fragment} from 'react'
import styled from 'styled-components'
import Head from 'next/head'

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
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={first.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={first.description} />
      </Head>
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
    </Fragment>
  )
}
