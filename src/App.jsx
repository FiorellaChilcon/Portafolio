import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='app-body'>
      <Sidebar />
      <Home/>
      <AboutMe />
      <Projects/>
    </div>
  );
}

export default App;
