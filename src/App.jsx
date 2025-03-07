import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Start from "./components/Start";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full scroll-smooth bg-zinc-900 text-white">
      
      {/* Header - Only Fades In When Scrolling Past Start */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50"
      >
        <Header showHeader={showHeader} />
      </motion.div>

      {/* Start Section - Animates When Scrolling Away */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: showHeader ? 0 : 1, y: showHeader ? -100 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-screen flex items-center justify-center"
      >
        <Start />
      </motion.div>

      {/* Other Sections - No Animation, Just Normal Scrolling */}
      <div>
        <div className="min-h-screen flex items-center justify-center">
          <About />
        </div>
        
        <div className="min-h-screen flex items-center justify-center">
          <Projects />
        </div>

        {/* Shortened Contact Section */}
        <div className="h-[60vh]">
          <Contact />
        </div>
      </div>
      
    </div>
  );
}

export default App;
