import Head from 'next/head';
import { useEffect, useState } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import NavBar from '../../components/NavBar';
import { getPost, getPosts } from '../../data/posts';
import { shouldShowDarkMode } from '../../lib/helpers';

interface BlogDetailsMeta {
  title: string;
  desc: string;
  category: string;
}

interface BlogLayoutProps {
  data: BlogDetailsMeta;
  content: MDXRemoteSerializeResult;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ data, content }) => {
  const { title, desc, category } = data;
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
            <div className="prose lg:prose-lg dark:prose-stone">
              <MDXRemote {...content} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogLayout;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: Record<string, string>;
}) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
