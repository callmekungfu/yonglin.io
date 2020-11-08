import react from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div className="">
        <Image
          src="/img/logo.svg"
          alt="The Yonglin Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="font-medium">
        <NavBarLink href="#" linkText="Resume" />
        <NavBarLink href="#" linkText="Projects" />
        <NavBarLink href="#" linkText="Blog" />
        <NavBarLink
          href="mailto:hello@yonglin.io"
          linkText="Contact Me!"
          highlighted
        />
      </div>
    </div>
  );
};

interface NavBarLinkProps {
  href: string;
  linkText: string;
  highlighted?: boolean;
}

const NavBarLink = ({ href, linkText, highlighted }: NavBarLinkProps) => (
  <a
    href={href}
    className={`${
      highlighted ? 'text-indigo hover:text-indigo-darker' : 'hover:text-indigo'
    } transition duration-500 ease-in-out px-4`}
  >
    {linkText}
  </a>
);

const NavBarMobileLinkList = () => {
  return <div></div>;
};

export default NavBar;
