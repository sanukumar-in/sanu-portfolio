import { useState } from 'react';
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <main className={`min-h-screen w-full flex flex-col transition-colors duration-300 ${
            darkMode ? 'dark bg-gray-900 text-white' : 'bg-[#FAFAFA] text-black'
        }`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </main>
  );
}

export default App;