import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-body'>
      <Sidebar />
      <Home/>
      <AboutMe />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
