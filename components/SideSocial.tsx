export interface SocialLinksProps {
  horizontal?: boolean;
}
interface SideSocialLinkProps {
  url: string;
  iconClass: string;
  title: string;
}

const SocialLinks = (p: SocialLinksProps) => {
  return (
    <div
      className={p.horizontal ? 'flex items-center' : 'absolute left-0 ml-6'}
    >
      {/* GitHub */}
      <SocialLink
        url="https://github.com/callmekungfu"
        iconClass="fab fa-github"
        title="GitHub"
      />
      {p.horizontal && <div className="mx-8"></div>}
      {/* Linkedin */}
      <SocialLink
        url="https://www.linkedin.com/in/yonglinwang/"
        iconClass="fab fa-linkedin"
        title="LinkedIn"
      />
      {p.horizontal && <div className="mx-8"></div>}
      {/* Instagram */}
      <SocialLink
        url="https://www.instagram.com/yonglin_wang/"
        iconClass="fab fa-instagram"
        title="Instagram"
      />
    </div>
  );
};

const SocialLink = (props: SideSocialLinkProps) => {
  return (
    <div className="m-1.5">
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-50 hover:opacity-100 transition-all text-2xl"
        data-tip={props.title}
        aria-label={props.title}
      >
        <i className={props.iconClass} aria-hidden="true"></i>
      </a>
    </div>
  );
};
export default SocialLinks;
