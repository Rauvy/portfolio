const Start = () => {
  return (
    <div className="bg-[#181818] text-[#EEEEEE] w-full h-screen flex flex-col justify-between">
      <div className="grid grid-cols-3 md:grid-cols-4 items-center px-6 py-4 text-sm uppercase tracking-wide w-full">
        <p className="text-2xl text-left">R.Y.</p>
        <p className="text-[#FFD369] text-center">Creative Portfolio V.0.1</p>
        <p className="hidden md:flex items-center justify-center">
          <span className="material-symbols-rounded text-2xl mx-2">planet</span>
          Toronto, CA
        </p>
        <p className="hidden md:flex justify-end">All Rights Reserved</p>
      </div>



      <div className="flex flex-col justify-start flex-grow pt-20">
        <h1 className="text-6xl md:text-9xl font-bold tracking-wide text-[#FFD369] text-center">
          REHINA
        </h1>

        <div className="mt-6 flex flex-col text-[#FFD369] text-6xl md:text-9xl font-bold leading-tight px-10">
          <h1 className="self-start">SOFTWARE</h1>
          <h1 className="self-end">ENGINEER</h1>
        </div>
      </div>

      <div className="relative px-6 py-6 flex flex-col items-center">
        <span className="material-symbols-rounded text-4xl mx-2">mouse</span>
        <p className="text-[#FFD369] text-sm">Scroll down</p>
      </div>
    </div>
  );
};

export default Start;
