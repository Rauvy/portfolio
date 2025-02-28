import React from 'react';
const About = () => {
    return (
      <div className="grid grid-cols-2 p-10 h-screen items-center mx-auto max-w-screen-lg">
        
    
        <div className="flex justify-center col-span-2 w-full">
          <div className="bg-slate-700 w-4/6 h-64 rounded-3xl mx-5 flex items-center justify-center">
            Some text
          </div>
          <div className="bg-slate-700 h-64 w-2/6 rounded-3xl mx-5 flex items-center justify-center">
            Image
          </div>
        </div>
  
        
        <div className="bg-slate-700 h-64 rounded-3xl mx-5 col-span-2 flex items-center justify-center">
          Skills
        </div>
        <div className="bg-slate-700 h-64 rounded-3xl mx-5 col-span-2 flex items-center justify-center">
        What makes me different?
        </div>
      </div>
    );
  };
  
  export default About;
  