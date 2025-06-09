import * as React from 'react';

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

// Contenedor reutilizable para cada listado con título y separación
const Container = ({ title, children }: ContainerProps) => {
  return (
    <section className="mb-8">
      {/* Título de la sección */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* Contenido de la sección */}
      <div className="p-4">
        {children}
      </div>
    </section>
  );
};

export default Container;

   