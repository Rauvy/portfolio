import twitter from '../assets/twitter.jpg';
import notes from '../assets/notes.png';

const Projects = () => {
  return (
    <div className="bg-[#181818] py-16 w-full" id='projects'>
      
      <div className="flex flex-col items-start text-center mb-16 ml-40">
        <h2 className="text-8xl text-white leading-tight">FEATURED</h2>
        <h2 className="text-8xl text-white ml-96">PROJECTS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-lg mx-auto">

        <a href="https://twitter-frontend-a6u3.onrender.com">
          <div className="relative bg-[#1E1E1E] rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-[0px_0px_15px_2px_#EEEEEE]">
            <h2 className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-md text-lg font-bold">
              TWITTER
            </h2>
            <img
              src={twitter}
              alt="Project image"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out
                hover:scale-105 hover:blur-[1px] hover:contrast-125"
            />
            <div className="mt-4">
              <p className="text-gray-300 text-lg text-center">
                React.js, Express.js, Tailwind CSS, MongoDB, JWT
              </p>
            </div>
          </div>
        </a>

        <a href="https://doodlenotes.netlify.app">
          <div className="relative bg-[#1E1E1E] rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-[0px_0px_15px_2px_#EEEEEE]">
            <h2 className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-md text-lg font-bold">
              NOTES
            </h2>
            <img
              src={notes}
              alt="Project image"
              className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out
                hover:scale-105 hover:blur-[1px] hover:contrast-125"
            />
            <div className="mt-4">
              <p className="text-gray-300 text-lg text-center">
                React.js, Express.js, Tailwind CSS
              </p>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Projects;
