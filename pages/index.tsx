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
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <div className="flex flex-grow flex-col align-center justify-center text-center">
            <h1 className="font-sans text-5xl font-semibold px-40">
              Hello I'm Yong Lin. I build performant applications and delightful
              UX
            </h1>
            <div className="text-2xl">with a lot of tech.</div>
          </div>
          <div className="text-center py-4">Scroll down for more</div>
        </div>
      </main>
    </div>
  );
}
