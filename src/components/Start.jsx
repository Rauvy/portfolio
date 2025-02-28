const Start = () => {
    return (
      <div className="bg-[#222831] text-[#EEEEEE] w-full h-screen flex flex-col justify-between">
  
        {/* Navbar */}
        <div className="flex justify-between items-center px-6 py-4 text-sm uppercase tracking-wide">
          <p className="text-2xl">R.Y.</p>
          <p className="text-[#FFD369]">Creative Portfolio V.0.1</p>
          <p className="hidden md:block">Toronto, CA</p>
          <p className="hidden md:block">All Rights Reserved</p>
        </div>
  
        {/* Main Content (Name + Title) */}
        <div className="flex flex-col justify-start flex-grow pt-20">
          {/* Name */}
          <h1 className="text-6xl md:text-9xl font-bold tracking-wide text-[#FFD369] text-center">
            REHINA
          </h1>
  
          {/* Title (Properly Positioned) */}
          <div className="mt-6 flex flex-col text-[#FFD369] text-6xl md:text-9xl font-bold leading-tight px-10">
            <h1 className="self-start">SOFTWARE</h1>
            <h1 className="self-end">ENGINEER</h1>
          </div>
        </div> 
  
        {/* Scroll Down Text */}
        <div className="relative px-6 py-6 flex justify-between items-end">
          <p className="text-[#FFD369]">Icon and Scroll Down Text</p>
        </div>
  
      </div>
    );
  };
  
  export default Start;
  