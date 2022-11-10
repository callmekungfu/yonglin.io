import Head from 'next/head';

const CommonHead = () => (
  <Head>
    <title>
      Yong Lin Wang | I build performant applications and delightful UX
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    {/* Facebook Links */}
    <meta property="og:url" content="https://yonglin.io" />
    <meta property="og:title" content="Yong Lin's Website" />
    <meta
      property="og:description"
      content="I build performant applications and delightful UX, come checkout my website"
    />
    <meta property="og:image" content="http://yonglin.io/img/yonglin.png" />
    {/* Twitter Links */}
    <meta name="twitter:title" content="Yong Lin's Website" />
    <meta
      name="twitter:description"
      content="I build performant applications and delightful UX, come checkout my website"
    />
    <meta name="twitter:image" content="http://yonglin.io/img/yonglin.png" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default CommonHead;
