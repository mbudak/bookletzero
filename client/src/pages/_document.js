import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#2296f3" />
        <meta name="title" content="BookletZERO - Test Manager that generate online or booklets" />
        <meta
          name="description"
          content="Start to generate your next Test with BookletZERO. It generate online tests or test booklets."
        />
        <meta
          name="keywords"
          content="test booklet print or download, online tests, test templates, question bank, manage tests online"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bookletzero.com/" />
        <meta property="og:site_name" content="bookletzero.com" />
        <meta property="article:publisher" content="https://www.facebook.com/bookletzero" />
        <meta property="og:title" content="BookletZERO - Test Manager" />
        <meta
          property="og:description"
          content="BookletZERO Test Manager is made for the faster and better test booklet generation using a modern technology stack."
        />
        <meta property="og:image" content="https://bookletzero.com/og-image/og-facebook.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bookletzero.com" />
        <meta property="twitter:title" content="BookletZERO - Test Manager" />
        <meta
          property="twitter:description"
          content="BookletZERO Test Manager is made for the faster and better test booklet generation using a modern technology stack."
        />
        <meta property="twitter:image" content="https://bookletzero.com/og-image/og-twitter.png" />
        <meta name="twitter:creator" content="@codedthemes" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
