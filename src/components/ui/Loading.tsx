const Loading = ({ message = "Cargando..." }: { message?: string }) => {
    return (
      <div className="flex items-center justify-center text-white py-8 text-lg">
        <span className="animate-pulse">{message}</span>
      </div>
    );
  };
  
  export default Loading;
  