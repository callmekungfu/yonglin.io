import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          Yong Lin Wang | I build performant applications and delightful UX
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ejl5vdk.css"
        ></link>
      </Head>
      <main>
        <h1>
          Hello I'm Yong Lin. I build performant applications and delightful UX
        </h1>
      </main>
    </div>
  );
}
