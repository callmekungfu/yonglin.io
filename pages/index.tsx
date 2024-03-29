import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import CommonHead from '../components/Head';
import FancyLink from '../components/Link';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SideSocial';
import TechStackModal from '../components/TechStack';
import WebsiteVersionTag, {
  GitHubReleaseResponse,
} from '../components/VersionTag';
import { shouldShowDarkMode } from '../lib/helpers';

interface HomePageProps {
  tagData: GitHubReleaseResponse;
}

export default function Home({ tagData }: HomePageProps) {
  const [shouldShowYongLin, setShouldShowYonglin] = useState(false);
  const [shouldShowTechStack, setShouldShowTechStack] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const showTechStackModal = () => {
    const body = document.getElementsByTagName('body').item(0);
    if (body) {
      body.style.overflow = 'hidden';
      setShouldShowTechStack(true);
    }
  };

  // Perform the following action after page has been loaded in DOM
  useEffect(() => {
    setDarkMode(shouldShowDarkMode());
  }, []);

  return (
    <div className={darkMode ? 'dark' : 'too-bright'}>
      {shouldShowTechStack && (
        <TechStackModal onHide={() => setShouldShowTechStack(false)} />
      )}
      <div className="dark:bg-black dark:text-white">
        <div className="container md:mx-auto">
          <CommonHead />
          <main>
            <SocialLinks />
            <div className="min-h-screen flex flex-col mb-20 pb-12 relative">
              <NavBar onDarkModeToggle={(mode) => setDarkMode(mode)} />
              <img
                style={{
                  zIndex: -1,
                }}
                className={`absolute m-auto left-0 right-0 top-0 bottom-0 w-4/5 transition-all ${
                  shouldShowYongLin ? 'opacity-30' : 'opacity-0'
                }`}
                src="/img/yonglin.png"
                alt="My name written as Chinese characters"
              />
              <div className="flex flex-grow flex-col align-center justify-center text-center">
                <h1 className="font-sans text-2xl md:text-5xl font-semibold md:px-40 mb-4">
                  I'm{' '}
                  <FancyLink
                    onMouseEnter={() => setShouldShowYonglin(true)}
                    onMouseLeave={() => setShouldShowYonglin(false)}
                  >
                    Yong Lin
                  </FancyLink>
                  . I build performant applications and delightful user
                  experiences.
                </h1>
                <div className="text-lg md:text-2xl">
                  with a lot of{' '}
                  <FancyLink onClick={showTechStackModal}>tech</FancyLink>.
                </div>
              </div>
              <div className="text-sm text-center py-4">Scroll for more</div>
            </div>
            {/* Projects Section */}
            <section className="mb-20 pt-4" id="projects">
              {/* Project Cards */}
              <ProjectCard
                title="Chronicle"
                desc="A customer visit tracking and reporting SaaS for personal care businesses."
                image={
                  <div className="max-h-60 md:max-h-full overflow-hidden md:overflow-visible mb-6 md:mb-0 max-w-lg">
                    <img
                      src="/img/chronicle.png"
                      alt="Chronicle Screenshot"
                      className="md:max-w-sm md:translate-y-20"
                    />
                  </div>
                }
                bgColor="bg-orange-50"
                bgColorDark="bg-orange-400"
                cto={
                  <a
                    href="https://github.com/konomiAI/Chronicle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase hover:underline focus:underline"
                  >
                    See Project
                  </a>
                }
              />
              {/* UOSC */}
              <ProjectCard
                title="UOSC Web Presence"
                desc="UOSC is a club that aims to enable students to improve their software development skills."
                image={
                  <div className="max-h-60 md:max-h-full overflow-hidden md:overflow-visible mb-6 md:mb-0 max-w-lg">
                    <img
                      src="/img/uosc.png"
                      alt="UOSC Home Page Logo"
                      className="md:max-w-md md:translate-y-20 md:-translate-x-20"
                    />
                  </div>
                }
                bgColor="bg-blue-50"
                bgColorDark="bg-blue-400"
                cto={
                  <a
                    href="https://github.com/uosoftwareclub/website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase hover:underline focus:underline"
                  >
                    See Project
                  </a>
                }
                reversed
              />
              {/* Nutlogger Native */}
              <ProjectCard
                title="Nutlogger Native"
                desc="A computer vision powered nutrition logger, take a picture of your food to track what you eat."
                image={
                  <div className="md:w-1/3 max-h-60 md:max-h-full overflow-hidden mb-6 md:mb-0">
                    <img
                      src="/img/nutlogger.png"
                      alt="Nutlogger Project Screenshots"
                      className="w-10/12 mx-auto transform -translate-y-32 md:transform-none"
                    />
                  </div>
                }
                bgColor="bg-green-50"
                bgColorDark="bg-green-400"
                cto={
                  <a
                    href="https://github.com/callmekungfu/nutlogger-native"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase hover:underline focus:underline"
                  >
                    See Project
                  </a>
                }
              />
            </section>
            {/* Footer section */}
            <section className="min-h-screen flex flex-col mx-4">
              <div className="pt-8"></div>
              <NavBar centerList hideContact />
              <div className="flex flex-grow flex-col align-center justify-center text-center">
                <div className="md:text-2xl mb-2">
                  That's it for now... Want to chat with me?
                </div>
                <div className="text-2xl font-sans md:text-5xl font-semibold md:px-40 mb-4">
                  <a href="mailto:wangyonglin1999@gmail.com">
                    wangyonglin1999@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <SocialLinks horizontal />
              </div>
              <div className="text-center py-4 opacity-60">
                <WebsiteVersionTag release={tagData} /> Built by Yong Lin with
                ❤️ and a 💻, you can find the{' '}
                <a
                  href="http://github.com/callmekungfu/yonglin.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-default hover:text-indigo-darker"
                >
                  source code here
                </a>
                .
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // TODO move this url to environment
  const res = await fetch(
    'https://api.github.com/repos/callmekungfu/yonglin.io/releases/latest',
  );
  const data = await res.json();
  return {
    props: {
      tagData: data,
    },
    revalidate: 43200,
  };
};
