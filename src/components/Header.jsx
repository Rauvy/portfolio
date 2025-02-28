
import logo from '../assets/test.jpeg';
import Navbar from './Navbar'; 
import logo from '../assets/test.jpeg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/90 backdrop-blur-md h-14 flex items-center justify-between px-6">
      
      
      <a href="/" className="flex items-center">
        <img src={logo} alt="Rehina Yakubiv" width={50} height={25} />
      </a>

      
      <Navbar />

      
      <a href="#contact" className="bg-white text-black px-4 py-1 rounded-lg text-sm hover:bg-gray-200 transition">
        Hire Me
      </a>

    </header>
  );
};

export default Header;
