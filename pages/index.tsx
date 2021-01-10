import Head from 'next/head';
import FancyLink, { FancyLinkButton } from '../components/Link';
import NavBar from '../components/NavBar';
import SectionTitle from '../components/SectionTitle';
import SocialLinks from '../components/SideSocial';

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
        <div className="min-h-screen flex flex-col mb-20 pb-12">
          <NavBar />
          <div className="flex flex-grow flex-col align-center justify-center text-center">
            <h1 className="font-sans text-5xl font-semibold px-40 mb-4">
              Hello I'm <FancyLink>Yong Lin</FancyLink>. I build performant
              applications and delightful user experiences.
            </h1>
            <div className="text-2xl">with a lot of tech.</div>
            <SocialLinks />
          </div>
          <div className="text-center py-4">Scroll for more</div>
        </div>
        {/* Projects Section */}
        <section className="mb-20" id="projects">
          <SectionTitle>Projects</SectionTitle>
          {/* Project Cards */}
          {/* Minmi */}
          <div
            className="rounded-3xl px-20 py-16 w-11/12 flex items-center justify-between max-h-96 ml-auto mb-8"
            style={{ backgroundColor: '#FCF8F5' }}
          >
            {/* Content */}
            <div className="max-w-xs">
              <h3 className="text-2xl mb-4 font-medium">Minmi</h3>
              <p className="text-sm mb-12">
                Minmi is a progressive unopinionated REST framework for Deno,
                inspired by Express.js
              </p>
              <div className="uppercase">Coming Soon...</div>
            </div>
            {/* Image */}
            <div>
              <img
                src="/img/minmi.svg"
                alt="Minmi Project Logo"
                className="w-9/12 mx-auto"
              />
            </div>
          </div>
          {/* UOSC */}
          <div
            className="rounded-3xl px-20 py-16 w-11/12 flex items-center justify-between max-h-96 mb-8 overflow-hidden"
            style={{ backgroundColor: '#F5F9FA' }}
          >
            {/* Image */}
            <div>
              <img
                src="/img/uosc.png"
                alt="UOSC Home Page Logo"
                className="transform w-9/12 mr-auto translate-y-52 -translate-x-20"
              />
            </div>
            {/* Content */}
            <div className="max-w-xs">
              <h3 className="text-2xl mb-4 font-medium">UOSC Web Presence</h3>
              <p className="text-sm mb-12">
                UOSC is a club that aims to enable students to improve their
                software development skills.
              </p>
              <div>
                <a
                  href="https://github.com/uosoftwareclub/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase hover:underline focus:underline"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          {/* Nutlogger Native */}
          <div
            className="rounded-3xl px-20 py-16 w-11/12 flex items-center justify-between max-h-96 ml-auto mb-8 overflow-hidden"
            style={{ backgroundColor: '#F3F5EB' }}
          >
            {/* Content */}
            <div className="max-w-xs">
              <h3 className="text-2xl mb-4 font-medium">Nutlogger Native</h3>
              <p className="text-sm mb-12">
                A computer vision powered nutrition logger, take a picture of
                your food and get feedback.
              </p>
              <div>
                <a
                  href="https://github.com/callmekungfu/nutlogger-native"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase hover:underline focus:underline"
                >
                  See Project
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="w-1/3">
              <img
                src="/img/nutlogger.png"
                alt="Nutlogger Project Screenshots"
                className="w-full mx-auto"
              />
            </div>
          </div>
          <div className="text-center text-lg">And more to come...</div>
        </section>
        {/* Footer section */}
        <section className="min-h-screen flex flex-col">
          <div className="pt-8"></div>
          {/* <NavBar centerList hideContact /> */}
          <div className="flex flex-grow flex-col align-center justify-center text-center">
            <div className="text-2xl mb-2">
              That's it for now... Want to chat with me?
            </div>
            <div className="font-sans text-5xl font-semibold px-40 mb-4">
              <a
                href="mailto:hello@yonglin.io"
                className="hover:text-indigo-darker"
              >
                hello@yonglin.io
              </a>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <SocialLinks horizontal />
          </div>
        </section>
      </main>
    </div>
  );
}
