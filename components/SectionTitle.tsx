import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SectionTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  position?: 'left' | 'right';
}

const SectionTitle = (props: SectionTitleProps) => {
  return <div className="uppercase font-bold">{props.children}</div>;
};

export default SectionTitle;
