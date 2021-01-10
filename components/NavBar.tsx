import Image from 'next/image';
import { useState } from 'react';

export interface NavBarProps {
  centerList?: boolean;
  hideContact?: boolean;
}

const NavBar = (p: NavBarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div
        className={`flex flex-row items-center p-8 ${
          p.centerList ? 'justify-center' : 'justify-between'
        }`}
      >
        {!p.centerList && (
          <div className="select-none">
            <a href="#">
              <Image
                src="/img/logo.svg"
                alt="The Yonglin Logo"
                width={32}
                height={32}
              />
            </a>
          </div>
        )}
        <div>
          <button
            className="md:hidden"
            aria-label="Toggle navigation menu display"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={`hidden md:block font-medium`}>
          <NavBarLink href="#" linkText="Resume" />
          <NavBarLink href="#projects" linkText="Projects" />
          <NavBarLink
            href="https://medium.com/@wangyonglin1999"
            linkText="Blog"
          />
          {!p.hideContact && (
            <NavBarLink
              href="mailto:hello@yonglin.io"
              linkText="Contact Me!"
              highlighted
            />
          )}
        </div>
      </div>
      {showMenu && <NavBarMobileLinkList />}
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
      highlighted
        ? 'text-indigo hover:text-indigo-darker focus:text-indigo-darker'
        : 'hover:text-indigo focus:text-indigo'
    } transition duration-500 ease-in-out px-4 py-2 md:py-0`}
  >
    {linkText}
  </a>
);

const NavBarMobileLinkList = () => {
  return (
    <div className="px-8 pt-0 pb-8 flex flex-col w-4/5 text-center mx-auto">
      <NavBarLink href="#" linkText="Resume" />
      <NavBarLink href="#projects" linkText="Projects" />
      <NavBarLink href="https://medium.com/@wangyonglin1999" linkText="Blog" />
      <NavBarLink
        href="mailto:hello@yonglin.io"
        linkText="Contact Me!"
        highlighted
      />
    </div>
  );
};

export default NavBar;
