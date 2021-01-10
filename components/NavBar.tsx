import Image from 'next/image';

export interface NavBarProps {
  centerList?: boolean;
  hideContact?: boolean;
}

const NavBar = (p: NavBarProps) => {
  return (
    <div
      className={`flex flex-row items-center p-4 ${
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
      <div className="font-medium">
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
    } transition duration-500 ease-in-out px-4`}
  >
    {linkText}
  </a>
);

const NavBarMobileLinkList = () => {
  return <div></div>;
};

export default NavBar;
