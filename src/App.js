import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/about" element={ <About /> } />
      <Route exact path="/contact" element={ <Contact /> } />
      <Route exact path="/projects" element={ <Projects /> } />
    </Routes>

    </>
  );
}

export default App;
