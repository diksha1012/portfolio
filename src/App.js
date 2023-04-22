import './App.css';
import Nabar from './PortfolioContainer/Navbar/Navbar.js'
import Home from './PortfolioContainer/Home/Home'
import About from './PortfolioContainer/AboutMe/About.js'
import Experiences from './PortfolioContainer/Experiences/Experiences.js'
import Abilities from './PortfolioContainer/Abilities/Abilities.js';
import Contact from './PortfolioContainer/ContactMe/Contact.js'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Nabar/>
      <Home/>
      <About/>
      <Experiences/>
      <Abilities/>
      <Contact/>
    </div>
  );
}

export default App;
