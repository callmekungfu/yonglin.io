import Head from 'next/head';

interface BlogDetailsMeta {
  title: string;
  desc: string;
}

interface BlogLayoutProps {
  meta: BlogDetailsMeta;
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ meta, children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={meta.desc}></meta>
      <title>{meta.title}</title>
    </Head>
    <main>
      <div className="container md:mx-auto">{children}</div>
    </main>
  </>
);

export default BlogLayout;
