const SectionHeading = ({heading, subHeading}) => {
  return (
    <div className="w-80 m-auto text-center space-y-1 my-10">
      <p className="text-yellow-500">--{subHeading}--</p>
      <h3 className="border-y-2 border-gray-400 py-2 text-2xl font-semibold">{heading}</h3>
    </div>
  );
};

export default SectionHeading;