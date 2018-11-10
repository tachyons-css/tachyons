import Document, { Head, Main, NextScript } from 'next/document'
import { version } from '../../package.json'

export default class _Document extends Document {
  render() {
    return (
      <html className="min-vh-100">
        <Head>
          <link
            rel="stylesheet"
            href={`https://unpkg.com/tachyons@${version}/css/tachyons.min.css`}
          />
          <link rel="stylesheet" href="https://file-zlngimivyb.now.sh" />
        </Head>
        <body className="sans-serif min-vh-100">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
