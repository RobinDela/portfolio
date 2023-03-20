import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { LanguageProvider } from './LanguageContext';

function App() {
  return (

    <LanguageProvider>
      <div>
        <Navbar />
        <Home />
        <Skills />
        <Work />
        <About />
        <Contact />
      </div>
    </LanguageProvider>

  );
}

export default App;
