import Document, { Html, Head, Main, NextScript } from 'next/document';

const isProduction = process.env.BUILD_ENV === 'production';

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
            src={
              isProduction
                ? 'https://jrcommon.vercel.app/_next/static/chunks/remoteEntry.js'
                : 'http://localhost:3010/_next/static/chunks/remoteEntry.js'
            }
          />
          <script
            data-webpack="jrprofile"
            src={
              isProduction
                ? 'https://jrprofile.vercel.app/web/remoteEntry.js'
                : 'http://localhost:3020/web/remoteEntry.js'
            }
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
