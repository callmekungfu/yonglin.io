import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="container mx-auto">
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
        <div className="min-h-screen">
          <NavBar />
          <h1 className="font-sans text-lg">
            Hello I'm Yong Lin. I build performant applications and delightful
            UX
          </h1>
        </div>
      </main>
    </div>
  );
}
