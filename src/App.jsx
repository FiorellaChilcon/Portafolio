import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-body'>
      <Sidebar />
      <Home/>
      <AboutMe />
      <Projects/>
      <Skills/>
      <Footer />
    </div>
  );
}

export default App;
