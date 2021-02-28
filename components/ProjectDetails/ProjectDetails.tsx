import Head from 'next/head';

interface ProjectDetailsMeta {
  title: string;
  desc: string;
}

interface ProjectDetailsProps {
  meta: ProjectDetailsMeta;
}

const ProjectDetailsPage: React.FC<ProjectDetailsProps> = ({
  children,
  meta,
}) => (
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

export default ProjectDetailsPage;
