import Link from 'next/link';

export interface GitHubReleaseResponse {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: Author;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: any[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface WebsiteVersionTagProps {
  release: GitHubReleaseResponse;
  fallback?: string;
}

const WebsiteVersionTag = ({ fallback, release }: WebsiteVersionTagProps) => {
  return (
    <a
      href={release.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-default hover:text-indigo-darker"
    >
      {'v' + release?.tag_name ?? fallback ?? '2.0.0'}
    </a>
  );
};

export default WebsiteVersionTag;
