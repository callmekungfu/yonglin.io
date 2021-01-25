import { useState } from 'react';
import styled from 'styled-components';
import { textColorByBackgroundColorHex } from '../lib/helpers';

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 900;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
`;

interface StackInfoProps {
  name: string;
  iconURL?: string;
  color?: string;
}

const Stack = ({ name, iconURL, color }: StackInfoProps) => {
  if (!color) {
    color = '#ffffff';
  }
  return (
    <div>
      <div
        className="mb-3 shadow-md w-32 h-32 rounded-full flex items-center m-auto"
        style={{ backgroundColor: color }}
      >
        <img
          src={iconURL ?? '/img/logo.svg'}
          className="m-auto"
          width={48}
          height={48}
        />
      </div>
      <div className={textColorByBackgroundColorHex(color)}>{name}</div>
    </div>
  );
};

interface TechStackModalProps {
  onHide: () => void;
}

const TechStackModal = ({ onHide }: TechStackModalProps) => {
  const hideTechStackModal = () => {
    const body = document.getElementsByTagName('body').item(0);
    if (body) {
      body.style.overflow = 'auto';
      onHide();
    }
  };
  return (
    <>
      <ModalOverlay>
        <div className="fixed right-10 top-10">
          <button onClick={hideTechStackModal}>
            <i className="fas fa-times fa-3x"></i>
          </button>
        </div>
        <div className="container mx-auto dark:text-white mt-32">
          <h2 className="text-center text-3xl font-bold">My Tech Stack</h2>
          <div className="my-8">
            <h3 className="text-center text-xl mb-4">Programming Language</h3>
            <div className="grid gap-4 grid-cols-3 auto-cols-auto xl:w-3/5 m-auto text-center">
              <Stack name="TypeScript" iconURL="/img/tech/ts-logo-512.png" />
              <Stack name="JavaScript" iconURL="/img/tech/js-logo.png" />
              <Stack name="Java" iconURL="/img/tech/java-logo.png" />
              <Stack name="Python" iconURL="/img/tech/python-logo.png" />
              <Stack name="Go" iconURL="/img/tech/go-logo.png" />
              <Stack name="Dart" iconURL="/img/tech/dart-logo.png" />
            </div>
          </div>
          <div className="my-8">
            <h3 className="text-center text-xl mb-4">Front-end Technology</h3>
            <div className="grid gap-4 grid-cols-3 auto-cols-auto xl:w-3/5 m-auto text-center">
              <Stack name="React" iconURL="/img/tech/react-logo.png" />
              <Stack name="Angular" iconURL="/img/tech/angular.png" />
              <Stack name="Vue" iconURL="/img/tech/vue-logo.png" />
              <Stack name="Svelte" iconURL="/img/tech/svelte-logo.png" />
              <Stack name="jQuery" />
              <Stack name="Next.js" iconURL="/img/tech/next-logo.png" />
              <Stack name="Gatsby" iconURL="/img/tech/gatsby-logo.png" />
              <Stack name="React Native" iconURL="/img/tech/react-logo.png" />
              <Stack name="Flutter" iconURL="/img/tech/flutter.png" />
            </div>
            <div className="text-center text-lg mt-4">And more...</div>
          </div>
          <div className="my-8">
            <h3 className="text-center text-xl mb-4">Server Technology</h3>
            <div className="grid gap-4 grid-cols-3 auto-cols-auto xl:w-3/5 m-auto text-center">
              <Stack name="ExpressJS" iconURL="/img/tech/node.png" />
              <Stack name="Fiber" iconURL="/img/tech/fiber.png" />
              <Stack name="Flask" iconURL="/img/tech/flask.png" />
              <Stack name="MongoDB" iconURL="/img/tech/mongo.png" />
              <Stack name="PostgreSQL" iconURL="/img/tech/postgres.png" />
              <Stack name="MySQL" iconURL="/img/tech/mysql.png" />
            </div>
          </div>
          <div className="mb-16 text-center text-sm text-gray-600">
            Psss. This site is built with Tailwind CSS, NextJS and TypeScript.
          </div>
        </div>
      </ModalOverlay>
    </>
  );
};

export default TechStackModal;
