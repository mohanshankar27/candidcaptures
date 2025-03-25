
const BackgroundDecorators = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-200 blur-3xl"></div>
      <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-orange-100 blur-3xl"></div>
      <div className="absolute -bottom-10 right-1/3 w-40 h-40 rounded-full bg-orange-300 blur-3xl"></div>
    </div>
  );
};

export default BackgroundDecorators;
