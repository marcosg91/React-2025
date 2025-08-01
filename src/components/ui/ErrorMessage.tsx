type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="text-center text-red-400 py-8 text-sm">
      {message}
    </div>
  );
};

export default ErrorMessage;
