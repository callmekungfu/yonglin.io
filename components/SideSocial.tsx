import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

interface SideSocialLinkProps {
  url: string;
  iconClass: string;
  title: string;
}

const SideSocialLinks = () => {
  return (
    <div className="absolute left-0">
      {/* GitHub */}
      <SideSocialLink
        url="https://github.com/callmekungfu"
        iconClass="fab fa-github"
        title="GitHub"
      />
      {/* Linkedin */}
      <SideSocialLink
        url="https://www.linkedin.com/in/yonglinwang/"
        iconClass="fab fa-linkedin"
        title="LinkedIn"
      />
      {/* Instagram */}
      <SideSocialLink
        url="https://www.instagram.com/yonglin_wang/"
        iconClass="fab fa-instagram"
        title="Instagram"
      />
    </div>
  );
};

const SideSocialLink = (props: SideSocialLinkProps) => {
  const [isTooltipVisible, setTooltipVisibility] = useState(false);
  useEffect(() => {
    setTooltipVisibility(true);
  }, []);
  return (
    <div className="m-1.5">
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-50 hover:opacity-100 transition-all text-xl"
        data-tip={props.title}
        aria-label={props.title}
      >
        <i className={props.iconClass} aria-hidden="true"></i>
      </a>
      {isTooltipVisible && <ReactTooltip place="right" effect="solid" />}
    </div>
  );
};
export default SideSocialLinks;
