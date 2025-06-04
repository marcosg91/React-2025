// Importar React
import React from 'react';

// Definir las props que acepta el componente Container.
// children es todo lo que se pasa dentro del componente cuando se usa.
type ContainerProps = {
  children: React.ReactNode; // Permite que el contenedor reciba cualquier elemento JSX como hijo
};

// Componente funcional Container que envuelve a sus hijos con estilos de padding y ancho máximo
const Container = ({ children }: ContainerProps) => {
  return (
    // Aplica padding (p-4), ancho máximo (max-w-4xl) y centra el contenido horizontalmente (mx-auto)
    <div className="p-4 max-w-4xl mx-auto">
      {children} {/* Renderiza los elementos hijos que se le pasen */}
    </div>
  );
};

export default Container; 


   