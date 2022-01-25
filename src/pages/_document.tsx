import Document, { Html, Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head></Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
