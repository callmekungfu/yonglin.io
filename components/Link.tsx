import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react';

const FancyLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) => {
  return (
    <a
      {...props}
      className="fancy-link"
      style={{
        boxShadow: 'inset 0 -12px 0 #275efe',
      }}
    >
      {props.children}
    </a>
  );
};

export const FancyLinkButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  return (
    <button
      {...props}
      className="transition-all hover:from-indigo"
      style={{
        boxShadow: 'inset 0 -4px 0 #275efe',
      }}
    >
      {props.children}
    </button>
  );
};

export default FancyLink;
