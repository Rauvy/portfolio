import test from "../assets/test.jpeg";

const Projects = () => {
  return (
    <div className="bg-[#181818] py-16 w-full">
      
      {/* 🔥 Featured Projects Title (UNCHANGED) */}
      <div className="flex flex-col items-start text-center mb-16 ml-40">
        <h2 className="text-8xl text-white leading-tight">FEATURED</h2>
        <h2 className="text-8xl text-white ml-96">PROJECTS</h2>
      </div>

      {/* 🔥 Projects Grid - Clean, Structured Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-lg mx-auto">

        {/* 🔥 Project 1 Card */}
        <div className="relative bg-[#1E1E1E] rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-[0px_0px_15px_2px_#EEEEEE]">
          <h2 className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-md text-lg font-bold">
            NAME OF THE PROJECT
          </h2>
          <img
            src={test}
            alt="Project image"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out
              hover:scale-105 hover:blur-[1px] hover:contrast-125"
          />
          <div className="mt-4">
            <p className="text-gray-300 text-lg text-center">
              Skills I used to build the project
            </p>
          </div>
        </div>

        {/* 🔥 Project 2 Card */}
        <div className="relative bg-[#1E1E1E] rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-[0px_0px_15px_2px_#EEEEEE]">
          <h2 className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-md text-lg font-bold">
            NAME OF THE PROJECT
          </h2>
          <img
            src={test}
            alt="Project image"
            className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out
              hover:scale-105 hover:blur-[1px] hover:contrast-125"
          />
          <div className="mt-4">
            <p className="text-gray-300 text-lg text-center">
              Skills I used to build the project
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
