

const About = () => {
  return (
      <div className="flex justify-center bg-[#222831] py-10">
        <div className="w-full max-w-screen-xl flex flex-col items-center gap-10 px-10">

          <div className="flex justify-center w-full gap-10">
            <div className="bg-slate-700 w-2/3 h-72 rounded-3xl flex items-center justify-center text-white text-xl font-bold">
              Some text
            </div>
            <div className="bg-slate-700 h-72 w-1/3 rounded-3xl flex items-center justify-center text-white text-xl font-bold">
              Image
            </div>
          </div>

          <div className="bg-slate-700 h-72 w-full rounded-3xl flex items-center justify-center text-white text-xl font-bold">
            Skills
          </div>

          <div className="bg-slate-700 h-72 w-full rounded-3xl flex items-center justify-center text-white text-xl font-bold">
            What makes me different?
          </div>

        </div>
      </div>
  );
};

export default About;
