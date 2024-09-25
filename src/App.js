import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/about" element={<About />} />  
        <Route path="/services" element={<Services />} />  
        <Route path="/rooms" element={<Rooms />} />  
        <Route path="/gallery" element={<Gallery />} />  
        <Route path="/contact" element={<Contact />} />  
      </Routes>
    </Router>
  );
};

export default App;
