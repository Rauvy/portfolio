import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("reginayakubiv@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 8000);
  };

  return (
    <div className="bg-[#181818] flex flex-col px-8 py-16">

      {/* 🔥 Header - Adjusted for Shorter Height */}
      <div className="flex flex-col items-start text-center ml-36 mb-20">
        <h2 className="text-8xl text-white leading-tight">LET'S BUILD</h2>
        <h2 className="text-8xl text-white ml-96">TOGETHER</h2>
      </div>

      {/* 🔥 Centered Email & Socials - Compact Spacing */}
      <div className="flex flex-col items-center justify-center flex-grow gap-4">

        {/* 📧 Contact Email */}
        <div className="text-center">
          <h2 
            onClick={copyToClipboard} 
            className="text-3xl text-[#FFD369] cursor-pointer hover:underline transition"
          >
            reginayakubiv@gmail.com
          </h2>
          <p className="text-gray-400 text-sm">{copied ? "Can't wait to hear from you!" : "Click to copy"}</p>  
        </div>

        {/* 🔥 Socials */}
        <div className="text-center">
          <p className="text-gray-400 text-lg">SOCIALS</p>
          <div className="flex gap-4 mt-2 justify-center">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl p-2 border border-gray-500 rounded-lg hover:bg-gray-700 cursor-pointer"/>
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl p-2 border border-gray-500 rounded-lg hover:bg-gray-700 cursor-pointer"/>
            </a>
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-white text-2xl p-2 border border-gray-500 rounded-lg hover:bg-gray-700 cursor-pointer"/>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
