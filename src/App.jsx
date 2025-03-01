import { useState, useEffect } from "react";
import About from "./components/About";
import Start from "./components/Start";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    console.log("Show Header:", showHeader); 
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHeader]);

  return (
    <div className="w-full h-screen scroll-smooth bg-zinc-900 text-white">
      
      <Header showHeader={showHeader} />

      <Start />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
