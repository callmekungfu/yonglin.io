import React from 'react';

export interface ProjectCardProps {
  title: string;
  bgColor: string;
  bgColorDark: string;
  desc?: string;
  cto?: React.ReactNode;
  image?: React.ReactNode;
  reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  cto,
  desc,
  image,
  bgColor,
  bgColorDark,
  reversed,
}) => {
  return (
    <div
      className={`rounded-3xl p-8 md:px-20 md:py-16 mx-4 md:w-11/12 flex flex-col-reverse ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center justify-between md:max-h-96 md:ml-auto mb-8 dark:${bgColorDark} ${bgColor} overflow-hidden`}
    >
      {/* Content */}
      <div className="max-w-xs">
        <h3 className="text-2xl mb-4 font-medium">{title}</h3>
        <p className="text-sm mb-12">{desc}</p>
        <div className="uppercase">{cto ?? null}</div>
      </div>
      {/* Image */}
      {image ?? null}
    </div>
  );
};

export default ProjectCard;
