import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import memoji from "../assets/memoji.png";
import memoji_1 from '../assets/memoji_1.png'
import avatar from "../assets/avatar.png";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: "🟨", desc: "Core scripting language for web development" },
      { name: "React", icon: "⚛️", desc: "Modern UI library for building interactive apps" },
      { name: "React Native", icon: "📱", desc: "Framework for building mobile apps with React" },
      { name: "Flutter", icon: "🦋", desc: "Cross-platform UI toolkit for mobile and web" },
      { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first framework for rapid UI design" },
      { name: "Bootstrap", icon: "🟦", desc: "Popular CSS framework for responsive design" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "🟢", desc: "JavaScript runtime for server-side development" },
      { name: "Express.js", icon: "🚀", desc: "Fast and minimalist web framework for Node.js" },
      { name: "Django", icon: "🐍", desc: "High-level Python framework for backend APIs" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "🐘", desc: "Reliable and scalable relational database" },
      { name: "MongoDB", icon: "🍃", desc: "NoSQL database for flexible document storage" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "☕", desc: "Robust and widely-used OOP language" },
      { name: "Python", icon: "🐍", desc: "Versatile and beginner-friendly programming language" },
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: "🔧", desc: "Version control system for tracking code changes" },
    ],
  },
];

const About = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "portfolio",   
      "template_yvkyxlo",  
      formData,
      "GGtfd5vdz5uwcEA2z"    
    )
    .then(() => {
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" }); 
      setTimeout(() => setIsOpen(false), 2000); 
    })
    .catch(() => setStatus("Error sending message ❌"));
  };

  return (
    <div className="flex justify-center bg-[#181818] py-10" id="about">
      <div className="w-full max-w-screen-xl flex flex-col items-center gap-10 px-10">

        <div className="flex w-full gap-10 flex-nowrap">
          
          <div className="bg-[#1E1E1E] w-2/3 h-72 rounded-3xl flex flex-col p-6 text-white text-xl font-bold relative">
            
            <div className="absolute top-5 left-5 flex items-center gap-3">
              <img src={avatar} alt="Avatar Image" className="h-16 w-16 rounded-full"/>
              <div className="flex flex-col leading-tight">
                <h2 className="text-base font-semibold">Hey, I'm Rehina</h2>
                <p className="text-xs text-gray-400">Software Engineer</p>
              </div>
            </div>

            <div className="absolute top-5 right-5 flex gap-4">
              <a href="https://github.com/Rauvy" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-white text-2xl p-2 border border-gray-500 rounded-lg hover:bg-gray-700 cursor-pointer"/>
              </a>
              <a href="https://www.instagram.com/yakubiiv/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl p-2 border border-gray-500 rounded-lg hover:bg-gray-700 cursor-pointer"/>
              </a>  
              <button 
                onClick={() => setIsOpen(true)}
                className="text-white text-sm px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-700"
              >
                Chat with me
              </button>
            </div>

            {/* Centered Large Text */}
            <div className="flex-grow flex items-center justify-center w-full mt-10">
              <p className="text-center text-lg text-gray-300 max-w-[95%] md:max-w-[90%] leading-relaxed">
                Hey, I’m Rehina, a full-stack developer who loves solving problems and building cool things on the web. 
                I thrive on experimenting with technology—whether it’s crafting smooth user experiences or optimizing backend performance. 
                Currently looking for an internship to learn, grow, and contribute. Let’s build something awesome. 🚀
              </p>
            </div>

          </div>

          <div className="bg-[#1E1E1E] h-72 w-1/3 rounded-3xl flex items-center justify-center shrink-0">
            <img src={memoji} alt="Icon of me" height={200} width={300}/>
          </div>

        </div>

        <div className="bg-[#1E1E1E] w-full rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-[#252525] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
                <h3 className="text-xl text-[#FFD369] mb-3">{category.title}</h3>
                <ul className="text-gray-300 space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-lg">{skill.icon}</span> {skill.name} - <span className="text-gray-400">{skill.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#1E1E1E] w-full rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
  
          <div className="w-full md:w-1/3 flex items-center justify-center">
            <img src={memoji_1} alt="My Icon" className="w-48 h-48 object-cover rounded-xl shadow-lg" />
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-white text-left">What Makes Me Different?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl text-[#FFD369]">🚀</span>
                <div>
                  <h3 className="text-lg text-white">Relentless Improvement</h3>
                  <p className="text-gray-400 text-sm">
                    I believe in mastering fundamentals, refining every detail, and never cutting corners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl text-[#FFD369]">💡</span>
                <div>
                  <h3 className="text-lg text-white">Problem-Solving Mindset</h3>
                  <p className="text-gray-400 text-sm">
                    Every challenge is an opportunity to find the cleanest, most efficient solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl text-[#FFD369]">⚙️</span>
                <div>
                  <h3 className="text-lg text-white">Engineering Discipline</h3>
                  <p className="text-gray-400 text-sm">
                    I treat code like a craft—clean, efficient, and built to scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#252525] p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold text-white text-center">Let's Connect!</h2>

              <p className="text-gray-300 text-center mt-2">
                Drop me a message and I'll get back to you.
              </p>

              <form onSubmit={sendEmail} className="mt-4">
                <input 
                  name="from_name"
                  value={formData.name}
                  type="text" 
                  placeholder="Your Name" 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400 mb-3"
                  required
                />
                <input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email" 
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400 mb-3"
                  required
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  placeholder="Your Message" 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400 mb-3"
                  rows="6"
                  required
                ></textarea>

                {status && <p className="text-center text-sm mt-2 text-yellow-400">{status}</p>}

                <div className="flex justify-between">
                  <button type="submit" className="bg-green-500 px-4 py-2 rounded hover:bg-green-400 transition">
                    Send
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
