import * as React from 'react';

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = ({ title, children }: ContainerProps) => {
  return (
    <section className="mb-10 px-1">
      {/* Título */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white tracking-wide hover:underline cursor-pointer">
          {title}
        </h2>
        {/* Botón opcional de "Ver más" o acciones futuras */}
        {/* <button className="text-sm text-text-secondary hover:underline hover:text-white">
          Ver más
        </button> */}
      </div>

      {/* Contenido */}
      <div className="grid gap-4">
        {children}
      </div>
    </section>
  );
};

export default Container;
