import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet, injectGlobal} from 'styled-components'

import {globalStyles} from '../styles/global'

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
          <title>Steredenn: Binary Stars</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
