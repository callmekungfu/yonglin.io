import Head from 'next/head';
import { useEffect, useState } from 'react';
import { shouldShowDarkMode } from '../../lib/helpers';
import NavBar from '../NavBar';

interface BlogDetailsMeta {
  title: string;
  desc: string;
  category: string;
}

interface BlogLayoutProps {
  meta: BlogDetailsMeta;
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ meta, children }) => {
  const { title, desc, category } = meta;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Perform the following action after page has been loaded in DOM
    setDarkMode(shouldShowDarkMode());
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={desc}></meta>
        <title>{title} | Yong Lin Wang</title>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ejl5vdk.css"
        ></link>
      </Head>
      <div className={darkMode ? 'dark' : ''}>
        <main className="dark:bg-black dark:text-white min-h-screen">
          <div className="container md:mx-auto pb-52">
            <NavBar onDarkModeToggle={(mode) => setDarkMode(mode)} />
            <div className="font-sans mt-6">
              <div className="dark:text-white text-gray-700 mb-3 capitalize">
                {category}
              </div>
              <div className="text-2xl md:text-5xl font-semibold mb-5">
                {title}
              </div>
              <div>{desc}</div>
            </div>
            <div className="pt-1 px-10 w-4 bg-gray-300 my-10" />
            {/* Blog content frame */}
            <div className="prose lg:prose-lg dark:prose-stone">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogLayout;
