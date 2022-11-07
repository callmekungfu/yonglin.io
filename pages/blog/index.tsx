import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import NavBar from '../../components/NavBar';
import { BlogPostMetadata, getPosts } from '../../data/posts';
import { shouldShowDarkMode } from '../../lib/helpers';
import CommonHead from '../../components/Head';
import Link from 'next/link';

interface BlogLayoutProps {
  posts: BlogPostMetadata[];
}

const Blog: React.FC<BlogLayoutProps> = ({ posts }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Perform the following action after page has been loaded in DOM
    setDarkMode(shouldShowDarkMode());
  }, []);

  return (
    <>
      <CommonHead />
      <Head>
        <meta name="Description" content=""></meta>
        <title>My Blog | Yong Lin Wang</title>
      </Head>
      <div className={darkMode ? 'dark' : ''}>
        <main className="dark:bg-black dark:text-white min-h-screen">
          <div className="container md:mx-auto pb-52">
            <NavBar onDarkModeToggle={(mode) => setDarkMode(mode)} />
            <div className="font-sans mt-6">
              <div className="dark:text-white text-gray-700 mb-3 capitalize">
                My blog
              </div>
              <div className="text-2xl md:text-5xl font-semibold mb-5">
                Latest posts
              </div>
              <div>
                A collections of opinions, learnings and discoveries I would
                like to share with you.
              </div>
            </div>
            <div className="pt-1 px-10 w-4 bg-gray-300 my-10" />
            {/* Blog content frame */}
            <div>
              {posts.map((post, i) => (
                <div
                  className={`border-solid ${
                    i === posts.length - 1 ? 'border-y' : 'border-t'
                  } border-gray-100`}
                  key={post.slug}
                >
                  <div className="py-10">
                    <div className="text-gray-600 font-mono text-sm">
                      {post.data.date}
                    </div>
                    <div className="text-xl font-sans font-semibold my-3">
                      {post.data.title}
                    </div>
                    <div className="font-thin">{post.data.desc}</div>
                    <div className="mt-6 text-indigo-default hover:text-indigo-darker transition-all ease-in">
                      <Link href={`/blog/${post.slug}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
