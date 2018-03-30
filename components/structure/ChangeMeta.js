import React, {Fragment} from 'react'
import Head from 'next/head'

// -------------------------------------------------------------
// Component.
// -------------------------------------------------------------

export default ({title, description}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} key="twitter_title" />
        <meta
          name="twitter:description"
          key="twitter_description"
          content={description}
        />
        <meta property="og:title" content={title} key="og_title" />
        <meta
          property="og:description"
          key="og_description"
          content={description}
        />
      </Head>
    </Fragment>
  )
}
