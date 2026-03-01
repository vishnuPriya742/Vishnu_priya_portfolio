import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import FooterInfo from './components/FooterInfo';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="glow-effect"></div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <FooterInfo />
    </div>
  );
}

export default App;
