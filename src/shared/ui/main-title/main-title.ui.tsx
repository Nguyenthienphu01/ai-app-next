import React from 'react';

interface MainTitleProps {
  content: string | React.ReactNode;
}

export const MainTitle: React.FC<MainTitleProps> = ({ content }) => {
  return (
    <>
      <h1 className="relative mb-3 w-fit text-lg font-bold after:absolute after:bottom-[-10px] after:left-0 after:h-[4px] after:w-16 after:bg-blue-500">
        {content}
      </h1>
    </>
  );
};
