import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            data-webpack="jrcommon"
            src="http://localhost:3010/_next/static/chunks/remoteEntry.js"
          />
          <script
            data-webpack="jrlayout"
            src="http://localhost:3020/web/remoteEntry.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
