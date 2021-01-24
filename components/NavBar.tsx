import Image from 'next/image';
import { useEffect, useState } from 'react';
import { shouldShowDarkMode } from '../lib/helpers';

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
    href: 'https://medium.com/@wangyonglin1999',
    linkText: 'Blog',
    highlighted: false,
  },
  {
    href: 'mailto:hello@yonglin.io',
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
            <div
              className={`w-16 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer ${
                isDarkMode ? 'bg-green-400' : ''
              }`}
              onClick={toggleDarkMode}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  isDarkMode ? 'translate-x-10' : ''
                }`}
              ></div>
            </div>
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
