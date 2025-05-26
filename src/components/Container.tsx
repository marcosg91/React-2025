import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="p-4 max-w-4xl mx-auto">{children}</div>;
};

export default Container;

   