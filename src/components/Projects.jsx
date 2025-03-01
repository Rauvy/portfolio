
import test from "../assets/test.jpeg";

const Projects = () => {
  return (
      <div className="bg-[#222831]">
        <div className="flex justify-center align-center flex-wrap mb-10">
          <div className="text-9xl w-full">FEATURED</div>
          <div className="text-9xl">PROJECTS</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 mx-auto">
          <div className="bg-slate-700 mb-10 relative col-span-2 w-2/3 mx-auto">
            <h2 className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-md text-lg font-bold">
              NAME OF THE PROJECT
            </h2>
            <img
              src={test}
              alt="Project image"
              className="w-full h-5/6 object-cover rounded-lg"
            />
            <p className="mt-2 text-white text-lg text-center">
              Skills I used to build the project
            </p>
          </div>

          <div className="bg-slate-700 m-10 relative w-2/3">
            <h2 className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-md text-lg font-bold">
              NAME OF THE PROJECT
            </h2>
            <img
              src={test}
              alt="Project image"
              className="w-full h-5/6 object-cover rounded-lg"
            />
            <p className="mt-2 text-white text-lg text-center">
              Skills I used to build the project
            </p>
          </div>

          <div className="bg-slate-700 mb-10 relative w-2/3 mt-16">
            <h2 className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-md text-lg font-bold">
              NAME OF THE PROJECT
            </h2>
            <img
              src={test}
              alt="Project image"
              className="w-full h-5/6 object-cover rounded-lg"
            />
            <p className="mt-2 text-white text-lg text-center">
              Skills I used to build the project
            </p>
          </div>
        </div>
      </div>
  );
};

export default Projects;
