import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SectionTitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  position?: 'left' | 'right';
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div
      style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
      }}
      className={`uppercase absolute font-bold ${
        props.position === 'left' ? 'left-0 ml-10' : 'right-0 mr-10'
      }`}
    >
      {props.children}
    </div>
  );
};

export default SectionTitle;
