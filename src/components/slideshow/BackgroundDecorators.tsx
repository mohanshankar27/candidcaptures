
const BackgroundDecorators = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-200 blur-3xl"></div>
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-orange-100 blur-3xl"></div>
      <div className="absolute -bottom-40 right-1/3 w-60 h-60 rounded-full bg-orange-300 blur-3xl"></div>
      
      {/* Premium decorative elements */}
      <div className="absolute top-40 left-1/4 w-1 h-20 bg-gradient-to-b from-orange-400/50 to-transparent rotate-45"></div>
      <div className="absolute bottom-60 right-1/4 w-1 h-32 bg-gradient-to-b from-orange-400/50 to-transparent -rotate-45"></div>
      <div className="absolute top-1/2 left-20 w-40 h-40 rounded-full border border-orange-300/20"></div>
      <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-orange-300/10"></div>
    </div>
  );
};

export default BackgroundDecorators;
