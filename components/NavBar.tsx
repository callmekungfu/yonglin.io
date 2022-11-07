import { useEffect, useState } from 'react';
import { shouldShowDarkMode } from '../lib/helpers';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Link from 'next/link';

export interface NavBarProps {
  centerList?: boolean;
  hideContact?: boolean;
  onDarkModeToggle?: (dark: boolean) => void;
}

const NavBarLinks: NavBarLinkProps[] = [
  {
    href: 'https://d2v2zv7pilalpy.cloudfront.net/resumev2.pdf',
    linkText: 'Resume',
    highlighted: false,
  },
  {
    href: '#projects',
    linkText: 'Projects',
    highlighted: false,
  },
  {
    href: '/blog',
    linkText: 'Blog',
    highlighted: false,
  },
  {
    href: 'mailto:wangyonglin1999@gmail.com',
    linkText: 'Contact Me!',
    highlighted: true,
  },
];

const NavBar = (p: NavBarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (p.onDarkModeToggle) {
      p.onDarkModeToggle(newMode);
    }
  };

  useEffect(() => {
    setIsDarkMode(shouldShowDarkMode());
  }, []);

  return (
    <div>
      <div
        className={`flex flex-row items-center p-8 ${
          p.centerList ? 'justify-center' : 'justify-between'
        }`}
      >
        {!p.centerList && (
          <div className="select-none">
            <Link href="/">
              <img
                src={isDarkMode ? '/img/logo_colorful.png' : '/img/logo.svg'}
                alt="The Yong Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
        )}
        {!p.centerList && (
          <div>
            <button
              className="md:hidden"
              aria-label="Toggle navigation menu display"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        )}
        <div className="flex items-center">
          <div className="hidden md:block font-medium mr-2">
            {NavBarLinks.map((l) => (
              <NavBarLink {...l} key={l.href} />
            ))}
          </div>
          {!p.centerList && (
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={24}
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
      {NavBarLinks.map((l) => (
        <NavBarLink {...l} key={l.href} />
      ))}
    </div>
  );
};

export default NavBar;
