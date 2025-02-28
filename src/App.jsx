
import About from './components/About';
import Start from './components/Start';
import Loading from "./components/Loading";
import Projects from "./components/Projects";
import Contact from './components/Contact';



function App() {
  return (
    <div className="w-full h-screen overflow-y-scroll scroll-smooth bg-zinc-900 text-white">
      <Start />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
