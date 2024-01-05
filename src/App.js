import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;