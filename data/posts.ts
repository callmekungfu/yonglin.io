import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface BlogPostMetadata {
  slug: string;
  data: Record<string, string>;
}

export const getPosts = (): BlogPostMetadata[] => {
  const files = fs.readdirSync(path.join('posts'));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fileContents = fs.readFileSync(
      path.join(`posts/${slug}.mdx`),
      'utf8',
    );
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  allPostsData.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return allPostsData;
};

export const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};
