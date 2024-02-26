import React from 'react';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
// import Footer from './components/Footer';
import Footer from './components/FooterNew';

function App() {
  return(
    <React.Fragment>
      <Navbar/>
      <HeroSection />
      <Projects />
      <Footer/>
    </React.Fragment>
  );
}

export default App;