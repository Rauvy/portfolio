
import Header from "./components/Header";
import Main from "./components/Main"; 
import About from './components/About';
import Start from './components/Start';
import Loading from "./components/Loading";

function App() {
  return (
    <div className="w-full h-screen overflow-y-scroll scroll-smooth bg-zinc-900 text-white">
      {/*<Header />*/}
      <Start />
      <About />

      {/*<Main sections={[About]}/>*/}
    </div>
  );
}

export default App;
