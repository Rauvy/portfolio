
import About from './components/About';
import Start from './components/Start';
import Loading from "./components/Loading";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full h-screen overflow-y-scroll scroll-smooth bg-zinc-900 text-white">
      <Start />
      <About />
      <Projects />
    </div>
  );
}

export default App;
