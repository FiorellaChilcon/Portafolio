import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-body'>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
