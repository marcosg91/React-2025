type Props = {
  message: string;
};

const NoData = ({ message }: Props) => {
  return (
    <div className="text-center text-gray-400 py-8 text-sm">
      {message}
    </div>
  );
};

export default NoData;
