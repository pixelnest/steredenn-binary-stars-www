import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'

import {globalStyles} from '../styles/global'

import Meta from '../components/structure/Meta'
import GA from '../components/structure/GA'

// -------------------------------------------------------------
// Document.
// -------------------------------------------------------------

export default class SteredennDocument extends Document {
  static getInitialProps({renderPage}) {
    injectGlobal`${globalStyles}`

    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return {...page, styleTags}
  }

  render() {
    return (
      <html>
        <Head>
          <Meta />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <GA />
        </body>
      </html>
    )
  }
}
